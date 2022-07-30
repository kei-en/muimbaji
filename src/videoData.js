import {v4 as uuidv4} from 'uuid' 
import video1 from '../src/videos/video1.mp4'
import video2 from '../src/videos/video2.mp4'
import video3 from '../src/videos/video3.mp4'
import video4 from '../src/videos/video4.mp4'
import video5 from '../src/videos/video5.mp4'
import video6 from '../src/videos/video6.mp4'

function Videos() {
    return [{
        name: 'Distant Dreaming',
        cover: 'https://i.scdn.co/image/ab67616d0000b273e5852cd50201ae82191cc7ba',
        artist: 'Burn Water',
        writer: ' Mama Aiuto ',
        producer: 'Masked Man',
        mixer: 'Molinari',
        what: 'In collaboration with The Knocks, we worked with Blu on her debut singles "In My Head" and "Mad Love" providing mixes, additional production, and vocal record. Since those sessions she has emerged as a break-through artist amassing over 1M followers on TikTok, 50M streams on Spotify alone, and touring sold-out performances across the country.',
        id: uuidv4(),
        url: video1
    },
    {
        name: 'The Truth',
        cover: 'https://i.scdn.co/image/ab67616d0000b2736457a7b89708b6c7441016a7',
        artist: 'Burn Water',
        writer: ' HM Surf, Mama Aiuto ',
        producer: 'Masked Man',
        mixer: 'David Perlick-Molinari',
        what: "Our very own Pink Flamingo Rhythm Revue's collaboration with Purple Disco Machine 'Money Money' was released as the lead track of the European powerhouse's sophomore album, Exotica. ",
        id: uuidv4(),
        url: video2
    },
    {
        name: 'Fate',
        cover: 'https://i.scdn.co/image/ab67616d0000b273b2f5b8cce9d9040b12121032',
        artist: 'Burn Water',
        writer: ' The Doppelgangaz ',
        producer: 'Masked Man',
        mixer: 'David',
        what: "Seamlessly blending her love of 60s-era pop, rock, and standards with current electronic production, her fun and soulful tracks dance that magical line between feeling utterly classic and totally fresh. After years as a side project, 2019 sees Deidre & the Dark strut to the foreground with the debut album Variety Hour - a record of “nostalgic noir-pop enhanced by modern stereophonics” (Culture Collide), featuring recent singles “Bad Day,” “Back In Time” and “One Night” - “...a bold and brassy declaration of love for the 60s girl groups, 70s Philly soul, and modern R&B that delivers the kinds of hooks and euphoria found only in the very best pop records.” (WFMU, Sheila B)",
        id: uuidv4(),
        url: video3
    },
    {
        name: 'Ikigai',
        cover: 'https://i.scdn.co/image/ab67616d0000b273276b59678ee7503d434cee3a',
        artist: 'Burn Water',
        writer: 'Misha',
        producer: 'ALEXANDER',
        mixer: 'Molinari',
        what: "Today, we have a new joint effort from the smoldering Violet Sands and nu-disco producer Justin Faust that carries that particular flame channeled through a slightly more modern prism. 'What Do You Feel' finds Faust wading in more down-tempo waters as he explores the brilliant aural canvas that is the enveloping aesthetic of Violet Sands. The result is a layered, mysterious, dark yet shimmering track perfect for the opening or closing credits of any show or movie.",
        id: uuidv4(),
        url: video4
    },
    {
        name: 'A Promise',
        cover: 'https://chillhop.com/wp-content/uploads/2022/07/4f05da370f675eb78a6b92880f93c4e7787935e3-1024x1024.jpg',
        artist: 'Burn Water',
        writer: 'Shrimpnose, chief.',
        producer: 'chief.',
        mixer: 'David',
        what: "YouTooCanWoo in-house artist French Horn Rebellion was selected to remix Beyoncé's single 7/11 from her seminal self-titled album.",
        id: uuidv4(),
        url: video5
    },
    {
        name: 'The Memory Module',
        cover: 'https://chillhop.com/wp-content/uploads/2022/05/c0c6175640eb9aa14b955ae91e255b3175de1c32-1024x1024.jpg',
        artist: 'Burn Water',
        writer: 'Philanthrope',
        producer: 'Sleepy Fish',
        mixer: 'A Reminder',
        what: "We met Justin while he was in New York visiting from Germany, introduced by Robert Perlick-Molinari (of our label and French Horn Rebellion) who suggested that we collaborate. In an afternoon, we began experimenting with the vintage synth collection at our studio – notably the Wurli, Roland and Oberheim instruments – embracing the early-aughts electronica influence, which came out even more once Deidre wrote the lyrics and added her vocals. After only a few hours, we had the shape of the song nearly complete and decided to meet for another session that week where the song really came together.",
        id: uuidv4(),
        url: video6
    }
]
}

export default Videos;