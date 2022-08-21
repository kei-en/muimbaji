export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 200,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: 'anticipate',
            velocity: 2,
            when: 'beforeChildren',
            staggerChildren: 0.25,
        },
    },
    exit: {
        scale: 0.95,
        transition: {
            duration: 0.4
        }
    },
};

export const titleAnim = {
    hidden: {
        y: 200,
    },
    show: {
        y: 0,
        transition: {
            duration: 0.75,
            ease: 'easeOut',
        }
    }
};

export const fade = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 0.3,
        },
    }
};