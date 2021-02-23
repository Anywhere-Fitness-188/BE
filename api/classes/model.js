const db = require('../../data/dbconfig');

function get(){
    return db('classes');
}

function getByClassName(className){
    return db('classes')
        .where('name', className)
        .first();
}

function getById(id){
    return db('classes')
    .where('id', id)
    .first();
}

function del(id){
    return db('classes')
    .where('id', id)
    .delete();
}

function insert(cla){
    return db('classes')
        .insert(cla)
        .then(a => {return a});
}

module.exports = {
    get,
    getByClassName,
    insert,
    del
};