import { Comment } from './comment';
import { User } from './user';

export class Photo {
    public photoId: number;
    public photoName: string;
    public title: string;
    public description: string;
    public user: User;
    public imageName: string;
    public likeByUserList: User[];
    public likes: number;
    public commentList: Comment[];
    public created: Date;
}