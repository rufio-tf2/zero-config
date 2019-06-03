import fs from 'fs-extra';
import { useCallback } from 'react';

import useGameData from './useGameData';

/* eslint-disable */
// prettier-ignore
const MOCK = {
    "sv_cheats": "1",
    "cl_autoreload": "1",
    "fps_max": "300",
    "hud_classautokill": "0",
    "hud_fastswitch": "1",
    "m_rawinput": "1",
    "spec_freeze_time": "4.0",
    "spec_freeze_traveltime": "0.4",
    "cl_hud_minmode": "1",
    "fov_desired": "90",
    "viewmodel_fov": "70",
    "viewmodel_fov_demo": "70",
    "hud_combattext": "1",
    "hud_combattext_batching": "1",
    "hud_combattext_healing": "1",
    "hud_saytext_time": "12",
    "net_graph": "0",
    "net_graphpos": "3",
    "tf_use_min_viewmodels": "1",
    "tf_dingalingaling": "1",
    "tf_dingaling_volume": "1",
    "tf_dingaling_pitchmindmg": "100",
    "tf_dingaling_pitchmaxdmg": "10",
    "con_filter_enable": "1",
    "ds_notify": "1",
    "cl_cmdrate": "65",
    "cl_interp": "0.030303",
    "cl_interp_ratio": "2",
    "cl_updaterate": "66",
    "net_compresspackets": "1",
    "net_compresspackets_minsize": "128",
    "net_maxfragments": "1200",
    "net_maxfilesize": "64",
    "net_maxroutable": "1200",
}
/* eslint-enable */

const COMMENT = /(?:\/\/\s?.*)/gi;
const KEY_SPACE_VALUE = /\"?(\w+)\"?\s\"?(\w+\.?\w*)\"?/gi;

const jsonToCfg = (jsonObj, outputPath) => {
  const writeStream = fs.createWriteStream(outputPath);
};

const useConfigFiles = () => {
  const { customFolderPath } = useGameData();
};

export default useConfigFiles;
