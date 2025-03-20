import { Button } from '@/components/Button';
import { Column } from '@/components/Containers';
import { Typography } from '@/components/Typography';
import { useConsultations } from '@/hooks/useConsultations';

const HomeScreen = (): JSX.Element => {
  const consultations = useConsultations();

  return (
    <Column testID="home-screen">
      <Column $padding="md" $gap="lg" $bgColor="surfactTertiary">
        <Column>
          <Typography variant="header" color="fontBlue">
            The UK's #1 Online Pharmacy
          </Typography>
          <Typography color="fontBlue">
            Trusted by 1.2 million customers since 2013
          </Typography>
        </Column>
        <Button href="/consultation">Start Consultation</Button>
      </Column>
      <Column $padding="md" $gap="md">
        <Typography variant="subheader">My Consultations</Typography>
        {consultations.data?.map((consultation) => (
          <Column
            key={consultation.id}
            $padding="md"
            $bgColor="surfactTertiary"
          >
            <Typography variant="paragraph">{consultation.id}</Typography>
          </Column>
        ))}
      </Column>
    </Column>
  );
};

export default HomeScreen;
