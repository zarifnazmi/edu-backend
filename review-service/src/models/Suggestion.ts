export interface Suggestion {
    emoji: string;
    title: string;
    suggestions: { key: string, label: string }[];
}