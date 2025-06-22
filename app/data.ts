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
        title: 'New Events Coming Soon',
        description: 'Stay tuned for our upcoming events!',
        id: 'event-coming-soon'
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

export const TEAM_MEMBERS: TeamMember[] = [
    {
        name: 'Jonah Berman',
        role: 'President',
        id: 'member1'
    },
    {
        name: 'Nate Berman',
        role: 'VP of Finance',
        id: 'member2'
    },
    {
        name: 'Leo Necheles',
        role: 'VP of Ops',
        id: 'member3'
    },
    {
        name: 'Varoon Enjeti',
        role: 'VP of Washed Up Senior',
        id: 'member4'
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
    {
        name: 'Alex Safayan',
        role: 'VP of Outreach',
        id: 'member8'
    },
    {
        name: 'Shraeya Iyer',
        role: 'VP of Tech',
        id: 'member9'
    }
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
        answer: 'For members, attendance is required at weekly club meetings and events. Participation in projects is not required.',
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
        link: '#'
    },
    {
        label: 'Instagram',
        link: '#'
    },
    {
        label: 'X/Twitter',
        link: '#'
    }
]

export const EMAIL = 'northwesternaiclub@gmail.com'
