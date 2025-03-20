import { fireEvent, waitFor } from '@testing-library/react-native';

import { Alert } from 'react-native';
import ConsultationScreen from '@/app/consultation';
import { renderWithWrapper } from '@/utils/jest';

const mockQuestions = Array.from({ length: 3 }).map((_, i) => ({
  id: `consultation-q-${i}`,
  text: `consultation-q-${i}`,
}));

jest.mock('@/hooks/useConsultationQuestions', () => ({
  useConsultationQuestions: () => ({
    data: mockQuestions,
  }),
}));

const mockMutate = jest.fn();
jest.mock('@/hooks/useCreateConsultation', () => ({
  useCreateConsultation: () => ({
    mutateAsync: () => mockMutate(),
  }),
}));

const mockGoBack = jest.fn();
jest.mock('expo-router', () => ({
  useRouter: () => ({
    back: () => mockGoBack(),
  }),
}));

const mockAlert = jest.spyOn(Alert, 'alert');

const render = () => renderWithWrapper(<ConsultationScreen />);

describe('<ConsultationScreen/>', () => {
  let sut: ReturnType<typeof render>;

  beforeEach(() => {
    jest.clearAllMocks();
    sut = render();
  });

  it('should render', () => {
    expect(sut.queryByTestId('consultation-screen')).toBeTruthy();
  });

  it('should render only the first question', () => {
    expect(sut.queryByText(mockQuestions[0].text)).toBeTruthy();
    expect(sut.queryByText(mockQuestions[1].text)).toBeFalsy();
    expect(sut.queryByText(mockQuestions[2].text)).toBeFalsy();
  });

  it('should disabled the button', () => {
    expect(sut.getByTestId('submit-button')).toBeDisabled();
  });

  describe('When a question is answered', () => {
    beforeEach(() => {
      const buttons = sut.getAllByText('Yes');
      fireEvent.press(buttons[buttons.length - 1]);
    });

    it('should render another question', () => {
      expect(sut.queryByText(mockQuestions[0].text)).toBeTruthy();
      expect(sut.queryByText(mockQuestions[1].text)).toBeTruthy();
      expect(sut.queryByText(mockQuestions[2].text)).toBeFalsy();
    });

    it('should disabled the button', () => {
      expect(sut.getByTestId('submit-button')).toBeDisabled();
    });

    describe('When another questions are answered', () => {
      beforeEach(() => {
        const buttons = sut.getAllByText('Yes');
        fireEvent.press(buttons[buttons.length - 1]);
      });

      it('should render another question', () => {
        expect(sut.queryByText(mockQuestions[0].text)).toBeTruthy();
        expect(sut.queryByText(mockQuestions[1].text)).toBeTruthy();
        expect(sut.queryByText(mockQuestions[2].text)).toBeTruthy();
      });

      describe('When all questions are answered', () => {
        beforeEach(() => {
          const buttons = sut.getAllByText('Yes');
          fireEvent.press(buttons[buttons.length - 1]);
        });

        it('should enable the button', async () => {
          await waitFor(() => {
            expect(sut.getByTestId('submit-button')).not.toBeDisabled();
          });
        });

        describe('When the submit button is pressed', () => {
          beforeEach(async () => {
            await waitFor(() => {
              expect(sut.getByTestId('submit-button')).not.toBeDisabled();
            });
            fireEvent.press(sut.getByTestId('submit-button'));
          });

          it('should create the mutation', async () => {
            await waitFor(() => {
              expect(mockMutate).toHaveBeenCalled();
            });
          });

          it('should navigate back', async () => {
            await waitFor(() => {
              expect(mockGoBack).toHaveBeenCalled();
            });
          });

          it('should show an alert', async () => {
            await waitFor(() => {
              expect(mockAlert).toHaveBeenCalledWith(
                'Consultation submitted!',
                'Thank you for submitting your consultation',
              );
            });
          });
        });
      });
    });
  });
});
