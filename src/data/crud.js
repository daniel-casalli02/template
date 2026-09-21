import { HardDrive, KeyRound, List, Server } from 'lucide-react';

export const examples = [
    {
        id: 1,
        method: 'ApiKey',
        verb: 'Get',
        description: 'Lista series com api-key',
        color: 'orange',
        Icon: KeyRound,
    },
    {
        id: 2,
        method: 'SSR',
        verb: 'Get',
        description: 'Lista series com SSR',
        color: 'orange',
        Icon: Server,
    },
    {
        id: 3,
        method: 'Offline',
        verb: 'Get',
        description: 'Lista series consumida no SessionStorage',
        color: 'orange',
        Icon: HardDrive,
    },
];

export const crud = [
    {
        id: 2,
        method: 'Read',
        verb: 'Get',
        description: 'Lista todas as séries',
        color: 'green',
        Icon: List,
    },
];