import { ItemEffect, IEffectData } from './ItemEffect'
import { ActivationType, EffectType } from '@/class'

interface IBonusEffectData extends IEffectData {
  detail: string
  size?: number
  hp?: number
  armor?: number
  evasion?: number
  edef?: number
}

class BonusEffect extends ItemEffect {
  public readonly Name?: string
  public readonly Detail: string
  public readonly Size?: number
  public readonly HP?: number
  public readonly Armor?: number
  public readonly Evasion?: number
  public readonly EDef?: number

  public constructor(data: IBonusEffectData, err?: boolean) {
    super(err)
    this.Name = data.name
    this.Detail = data.detail
    this.Size = data.size || 0
    this.HP = data.hp || 0
    this.Armor = data.armor || 0
    this.Evasion = data.evasion || 0
    this.EDef = data.edef || 0
    this.activation = ActivationType.None
    this.effectType = EffectType.Bonus
  }
}

export { IBonusEffectData, BonusEffect }
