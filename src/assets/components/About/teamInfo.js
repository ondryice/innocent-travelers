const EMAIL = 'email', CELL = 'cellphone', WORK = 'workphone', HOME = 'homephone', OTHER = 'other';

export const teamMembers = [
    {   name: 'Andréas Johnson',
        role: 'Project Manager',
        roleDesc: 'Manages the development of and maintains the website; contact for issues with the function of the website.',
        img: profile_andreasJohnson,
        contacts: [
            {   method: EMAIL,
                at: 'Andreas.Johnson@rams.colostate.edu'
            },
            {   method: CELL,
                at: '720.933.3788'
            }
        ],
        pronouns: 'He/Him/His',
        quote: {
            txt: 'I would rather have a mind opened by wonder than one closed by belief.',
            attr: 'Gerry Spence'
        },
        bio: {
            who: 'I am a current student of Colorado State University, pursuing a Major '
                + 'in Computer Science with Minors in Machine Learning, Physics, and Mathematics.',
            day: 'My ideal day is spent in nature, soaking it all in.',
            interests: 'I enjoy learning anything about science, reading a good book, skiing, rugby, and video-games.'
        }
    }
];
