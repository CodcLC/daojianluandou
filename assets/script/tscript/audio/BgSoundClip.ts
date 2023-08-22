const {ccclass, property} = cc._decorator;

export enum BgSoundClipType
{
    none = 0,
    main = 1,
    level1 = 2,
    level2 = 3,
    level3 = 4,
    level4 = 5,
    level5 = 6,
}

@ccclass
export default class BgSoundClip extends cc.Component {
    @property(cc.String)
    public clipName:string = "";

    @property({type:cc.Enum(BgSoundClipType)})
    public type:BgSoundClipType = BgSoundClipType.none;

    @property({type:cc.AudioClip})
    public clip:cc.AudioClip = null;
}
