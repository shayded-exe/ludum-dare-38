import { Game } from 'phaser';
import { GAME_CONFIG } from 'ld48';
import { BOOT_STATE, BootState, HUB_STATE, HubState, LOAD_STATE, LoadState, EARTH_WORLD_STATE, EarthWorldState, MOLTEN_WORLD_STATE, MoltenWorldState, FROZEN_WORLD_STATE, FrozenWorldState, JUNGLE_WORLD_STATE, JungleWorldState } from 'ld48/states';

window.onload = () => start();

const STATES = {
  [BOOT_STATE]: BootState,
  [LOAD_STATE]: LoadState,
  [HUB_STATE]: HubState,
  [EARTH_WORLD_STATE]: EarthWorldState,
  [MOLTEN_WORLD_STATE]: MoltenWorldState,
  [FROZEN_WORLD_STATE]: FrozenWorldState,
  [JUNGLE_WORLD_STATE]: JungleWorldState,
};

function start() {
  const game = new Game(GAME_CONFIG);

  for (const key in STATES) {
    game.state.add(key, STATES[key]);
  }

  game.state.start(BOOT_STATE);
}
