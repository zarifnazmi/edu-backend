import { Feedback } from '../models/Feedback';

var feedbacks: Feedback[] = [];
let okaySuggestions: string[] = [
    'I felt bored a few times.',
    'I can only understand some parts.',
    'I can only do some of the activities.',
    'I wish to interact more with my tutor.',
    'I wish to interact more with my classmates',
];
let awesomeSuggestions: string[] = [
    'I did not feel bored at all.',
    'I understood almost everything.',
    'I can do all the activities.',
    'I enjoyed interacting with my tutor.',
    'I enjoyed interacting with my classmates',
];

export { feedbacks, okaySuggestions, awesomeSuggestions };