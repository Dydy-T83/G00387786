// Interface

export interface SoundboardMap {
    button: ButtonMap;
    soundPath: string;
}

interface ButtonMap {
    name: string;
    color: string;
}

// Mocks

export const SoundboardMock = [
    {
        button: {
            name: 'Hulk',
            color: '#3498db'
        },
        soundPath: 'sounds/smash.mp3'
    }
   
]