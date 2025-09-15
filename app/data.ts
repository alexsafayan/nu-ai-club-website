type Event = {
    title: string
    description: string
    date?: string
    id: string
}

type Project = {
    title: string
    description: string
    id: string
}

type TeamMember = {
    name: string
    role: string
    id: string
}

type GeneralMember = {
    name: string
    id: string
}

type FAQItem = {
    question: string
    answer: string
    id: string
}

type SocialLink = {
    label: string
    link: string
}

export const EVENTS: Event[] = [
    {
        title: 'More Events Soon',
        description: '',
        date: 'Fall 2025',
        id: 'event-coming-soon'
    },
    {
        title: 'AI in Healthcare Symposium',
        description: 'Expert talks on AI applications in medicine.',
        date: 'February 15, 2024',
        id: 'event-healthcare'
    },
    {
        title: 'LLM Workshop Series',
        description: 'Hands-on training with large language models.',
        date: 'January 20, 2024',
        id: 'event-llm'
    },
    {
        title: 'AI Ethics Panel Discussion',
        description: 'Industry experts debate AI ethics and safety.',
        date: 'November 10, 2023',
        id: 'event-ethics'
    },
    {
        title: 'AI Startup Showcase',
        description: 'Local startups present AI innovations.',
        date: 'October 5, 2023',
        id: 'event-startup'
    }
]

export const PROJECTS: Project[] = [
    {
        title: 'Project 1',
        description: 'Example AI/ML project with faculty collaboration',
        id: 'project1'
    },
    {
        title: 'Project 2',
        description: 'Example startup partnership project',
        id: 'project2'
    },
    {
        title: 'Project 3',
        description: 'Example student-led research project',
        id: 'project3'
    }
]

export const EXECUTIVE_TEAM: TeamMember[] = [
    {
        name: 'Jonah Berman',
        role: 'Co-President',
        id: 'member1'
    },
    {
        name: 'Helen Wang',
        role: 'Co-President',
        id: 'member10'
    },
    {
        name: 'Leo Necheles',
        role: 'VP of Ops',
        id: 'member3'
    },
    {
        name: 'Alex Safayan',
        role: 'VP of Outreach',
        id: 'member8'
    },
    {
        name: 'Shraeya Iyer',
        role: 'VP of Tech',
        id: 'member9'
    },
    {
        name: 'Nate Berman',
        role: 'VP of Finance',
        id: 'member2'
    },
    {
        name: 'Sophie Shin',
        role: 'TPM',
        id: 'member5'
    },
    {
        name: 'Maanvi Sarwadi',
        role: 'TPM',
        id: 'member6'
    },
    {
        name: 'Raymond Gu',
        role: 'TPM',
        id: 'member7'
    },
]

export const GENERAL_MEMBERS: GeneralMember[] = [
    { name: 'Emma Thompson', id: 'gm1' },
    { name: 'Michael Chen', id: 'gm2' },
    { name: 'Sarah Rodriguez', id: 'gm3' },
    { name: 'David Kim', id: 'gm4' },
    { name: 'Julia Patel', id: 'gm5' },
    { name: 'Marcus Johnson', id: 'gm6' },
    { name: 'Sophia Lee', id: 'gm7' },
    { name: 'Ryan O\'Connor', id: 'gm8' },
    { name: 'Ava Gupta', id: 'gm9' },
    { name: 'Noah Williams', id: 'gm10' },
    { name: 'Isabella Martinez', id: 'gm11' },
    { name: 'Ethan Park', id: 'gm12' },
    { name: 'Olivia Wilson', id: 'gm13' },
    { name: 'Lucas Brown', id: 'gm14' },
    { name: 'Mia Anderson', id: 'gm15' },
    { name: 'Alexander Liu', id: 'gm16' },
    { name: 'Grace Taylor', id: 'gm17' },
    { name: 'Daniel Garcia', id: 'gm18' },
    { name: 'Victoria Chang', id: 'gm19' },
    { name: 'Benjamin Moore', id: 'gm20' }
]

export const FAQ_ITEMS: FAQItem[] = [
    {
        question: 'Who can join?',
        answer: 'Any Northwestern undergrad interested in AI—technical or not.',
        id: 'faq1'
    },
    {
        question: 'Do I need prior experience?',
        answer: 'No! We have roles and learning opportunities for all skill levels.',
        id: 'faq2'
    },
    {
        question: 'What\'s the time commitment?',
        answer: 'There is no time commitment for general members! We hope that you choose to engage in our opportunities and attend our events, but as a barrier-free org, nothing is mandatory. For fellows, a time commitment of about 2 hours per week can be expected.',
        id: 'faq3'
    },
    {
        question: 'How do I propose a project or speak at an event?',
        answer: 'Email us directly at northwesternaiclub@gmail.com',
        id: 'faq4'
    }
]

export const SOCIAL_LINKS: SocialLink[] = [
    {
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/groups/12886477/'
    }
]

export const EMAIL = 'northwesternaiclub@gmail.com'
