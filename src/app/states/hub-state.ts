import { State, Tilemap, ScaleManager, Tile, TilemapLayer, Camera } from 'phaser';
import { TilemapAsset } from 'assets';
import { hubMap } from 'assets/world';
import { LevelState } from 'ld48/states';
import { Prefab, PlayerPrefab } from 'ld48/prefabs';

export const HUB_STATE = 'HUB_STATE';

export class HubState extends LevelState {
  constructor() {
    super(hubMap);
  }
}
