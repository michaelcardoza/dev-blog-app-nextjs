import { Brand, Container, Typography } from '@app/features/ui/components';

export const Footer = () => {
  return (
    <footer className="bg-primary-100 py-10">
      <Container className="flex items-center justify-between">
        <Brand />
        <Typography
          className="text-neutral-500"
          fontWeight="light"
          fontSize={14}
        >
          Designed By Themefisher & Developed By Michael Cardoza
        </Typography>
      </Container>
    </footer>
  );
};
