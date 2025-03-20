import HomeScreen from '@/app/index';
import { renderWithWrapper } from '@/utils/jest';

const testConsultations = [
  {
    id: 'consultation-1',
  },
  {
    id: 'consultation-2',
  },
  {
    id: 'consultation-3',
  },
  {
    id: 'consultation-4',
  },
];
jest.mock('@/hooks/useConsultations', () => ({
  useConsultations: () => ({
    data: testConsultations,
  }),
}));

const render = () => renderWithWrapper(<HomeScreen />);

describe('<HomeScreen/>', () => {
  let sut: ReturnType<typeof render>;

  beforeEach(() => {
    jest.clearAllMocks();
    sut = render();
  });

  test('should render', () => {
    expect(sut.queryByTestId('home-screen')).toBeTruthy();
  });

  it.each(testConsultations)(
    'should render the consultations',
    (consultation) => {
      expect(sut.queryByText(consultation.id)).toBeTruthy();
    },
  );
});
