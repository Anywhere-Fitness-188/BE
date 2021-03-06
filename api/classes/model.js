const db = require('../../data/dbconfig');

function get(){
    return db('classes');
}

function getByClassName(className){
    return db('classes')
        .where('name', className)
        .first();
}

function getJoin(){
    return db('join')
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
    const user_id = cla.user_id;
    delete cla.user_id;
    return db('classes')
        .insert(cla)
        .then(a => {
            const joinObj = {
                user_id: user_id,
                class_id: a[0]
            }
         
            return "class created"
            // return db('join')
            //    .insert(joinObj)
            //     .then(a =>{ return 'class created'})
        });
}

function joinClass(obj){
    const joinObj = {
        user_id: obj.user_id,
        class_id: obj.class_id
    }
    return db('join')
                .insert(joinObj)
                .then(a =>{ return 'Added to Class'})
}

function getAttendees(class_id){
    return db('join')
    .join('users', 'join.user_id', '=', 'users.id')
    .select('users.username', 'users.type')
    .where('join.class_id', class_id)
}

function leaveClass(obj){
    return db('join')
    .where('user_id', obj.user_id)
    .where('class_id', obj.class_id)
    .delete()
    .then(a =>{
        return 'user removed from class';
    })
}

function updateClass(obj){
    return db('classes')
    .where('id', obj.id)
    .update(obj)
    .then(a =>{
        return 'class updated'
    })
}

module.exports = {
    get,
    getByClassName,
    insert,
    del,
    getJoin,
    getAttendees,
    joinClass,
    leaveClass,
    updateClass,
};