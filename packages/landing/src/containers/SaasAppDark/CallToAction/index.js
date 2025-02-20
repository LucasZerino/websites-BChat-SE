import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import { Icon } from 'react-icons-kit';
import { arrowRight2 } from 'react-icons-kit/icomoon/arrowRight2';
import Section, { BGImage, SectionHeading } from './cta.style';

const VideoIntro = () => {
  const message = 'Olá, estou interessado em saber mais sobre o BChat SE';

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/558431901700?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Section id="">
      <BGImage>
        <SectionHeading>
          <Text
            as="span"
            className="subtitle"
            content="Tudo em um só lugar"
          />
          <Heading content="Centralize toda a comunicação da sua empresa em um só lugar" />
          <Text content="Gerencie todas as conversas da sua empresa em um único sistema, integrando diferentes canais de comunicação sem complicação." />
          <Button 
            title="Saiba mais" 
            icon={<Icon icon={arrowRight2} />} 
            iconPosition="right"
            onClick={handleWhatsAppClick}
          />
        </SectionHeading>
      </BGImage>
    </Section>
  );
};

export default VideoIntro;
