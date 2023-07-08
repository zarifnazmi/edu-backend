import { Feedback } from '../models/Feedback';
import { Suggestion } from '../models/Suggestion';

var feedbacks: Feedback[] = [];
const okaySuggestions: string[] = [
    'I felt bored a few times.',
    'I can only understand some parts.',
    'I can only do some of the activities.',
    'I wish to interact more with my tutor.',
    'I wish to interact more with my classmates.',
];
const awesomeSuggestions: string[] = [
    'I did not feel bored at all.',
    'I understood almost everything.',
    'I can do all the activities.',
    'I enjoyed interacting with my tutor.',
    'I enjoyed interacting with my classmates.',
];
const emojiTerrible = '🙁';
const emojiOkay = '😕';
const emojiAwesome = '🤩';
const emojis: Suggestion[] = [
    {
        emoji: emojiTerrible,
        title: 'Terrible...',
        suggestions: []
    },
    {
        emoji: emojiOkay,
        title: 'Okay.',
        suggestions: [{
            label: 'I felt bored a few times.',
            key: '0'
        },
        {
            label: 'I can only understand some parts.',
            key: '1'
        },
        {
            label: 'I can only do some of the activities.',
            key: '2'
        },
        {
            label: 'I wish to interact more with my tutor.',
            key: '3'
        },
        {
            label: 'I wish to interact more with my classmates.',
            key: '4'
        }
    ]
    },
    {
        emoji: emojiAwesome,
        title: 'Awesome!',
        suggestions: [{
            label: 'I did not feel bored at all.',
            key: '0'
        },
        {
            label: 'I understood almost everything.',
            key: '1'
        },
        {
            label: 'I can do all the activities.',
            key: '2'
        },
        {
            label: 'I enjoyed interacting with my tutor.',
            key: '3'
        },
        {
            label: 'I enjoyed interacting with my classmates.',
            key: '4'
        }
    ]
    }
];

export { feedbacks, okaySuggestions, awesomeSuggestions, emojis };