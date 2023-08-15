import {Document} from './document';

export interface IPrototype{
    clone(mode: number): Document;
}