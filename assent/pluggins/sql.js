*/
█▀█ █▀▀█ █▀█ ▄█─ 
 ─▄▀ █▄▀█ ─▄▀ ─█─ 
╚█▄▄ █▄▄█ █▄▄ ▄█▄
Copyright (C) 2021 JavisSL. 
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const KingRomeo = require('kingromeo-public');
const Build = QueenAmdi.build
const { DataTypes } = require('@javissl/sequelize');

const FiltersDB = Build.DATABASE.define('filter', {
    chat: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pattern: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    regex: {
        type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false
    }
});
 
async function getFilter(jid = null, filter = null) {
    var Wher = {chat: jid};
    if (filter !== null) Wher.push({pattern: filter});
    var Msg = await FiltersDB.findAll({
        where: Wher
    });

    if (Msg.length < 1) {
        return false;
    } else {
        return Msg;
    }
}


async function setFilter(jid = null, filter = null, tex = null, regx = false) {
    var Msg = await FiltersDB.findAll({
        where: {
            chat: jid,