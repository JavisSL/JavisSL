*/
 █▀█ █▀▀█ █▀█ ▄█─ 
 ─▄▀ █▄▀█ ─▄▀ ─█─ 
╚█▄▄ █▄▄█ █▄▄ ▄█▄
Copyright (C) 2021 JavisSL. 
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const KingRomeo = require('kingromeo-public');
const Amdi = KingRomeo-public.events
const _amdi = KingRomeo.antiFunctions
const Build = KingRomeo.build

Amdi.operate(
    {on: 'text', fromMe: false,  deleteCommand: false}, (async (amdiMSG) => {  
    await QueenAmdi.amdi_setup()  

    await _king.fakeBots( kingMSG )
    
    if (Build.ANTIBAD == 'true') {
        await _king.antiBad( kingMSG )
    }
    
    if (Build.ANTIBUG == 'true') {
        await _king.antiBug( kingMSG )
    }

    if (Build.ANTILINK == 'true') {
        await _amdi.antiLink( kingMSG )
    }
}));
