import Fighter from './mprovedFighter';

//место для комментариев к классу
export default class ImprovedFighter extends Fighter{
    doubleHit(enemy, point = 0){
        point *= 2;
        super.hit(enemy, point);
    }
};