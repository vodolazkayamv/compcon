import { ItemEffect, IEffectData } from './ItemEffect'
import { ActivationType, EffectType } from '@/class'

interface IDroneData extends IEffectData {
  size: number
  hp: number
  armor?: number
  edef: number
  evasion: number
  detail: string
  abilities?: IEffectData[]
}

class DroneEffect extends ItemEffect {
  public readonly Name?: string
  public readonly Detail: string
  public readonly Size: number
  public readonly HP: number
  public readonly Armor?: number
  public readonly Evasion: number
  public readonly EDef: number
  public readonly Abilities?: ItemEffect[]

  public constructor(data: IDroneData, err?: boolean) {
    super(err)
    this.Name = data.name
    this.Detail = data.detail
    this.Size = data.size
    this.HP = data.hp
    this.Armor = data.armor
    this.Evasion = data.evasion
    this.EDef = data.edef
    this.Abilities = data.abilities ? data.abilities.map(x => ItemEffect.Generate(x)) : []
    this.activation = data.activation || ActivationType.Quick
    this.effectType = EffectType.Drone
  }
}

export { IDroneData, DroneEffect }
