import { Photo } from './photo';
export class Comment {
    commentId: number;
    photo: Photo;
    userName: string;
    content: string;
    photoId: number;
}
