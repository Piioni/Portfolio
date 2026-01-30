import { Container } from '@/components/ui';
import {
    HeroSection,
    SkillsSection,
    ExperienceSection,
    ProjectsPreview,
    InterestsSection,
} from '@/components/sections';

export default function Home() {
    return (
        <Container>
            <HeroSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsPreview />
            <InterestsSection />
        </Container>
    );
}
