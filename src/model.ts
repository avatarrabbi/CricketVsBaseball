export interface CategoryModel {
    id: number;
    title: string;
    image: string;
    cricket_image: string;
    baseball_image: string;
    cricket_description: string;
    baseball_description: string;
}

export const quizDisplay = {
    WRONG_SCREEN_DISPLAY: 'WRONG_SCREEN_DISPLAY',
    CORRECT_SCREEN_DISPLAY: 'CORRECT_SCREEN_DISPLAY',
    SCORE_SCREEN_DISPLAY: 'SCORE_SCREEN_DISPLAY'
}