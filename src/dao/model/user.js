module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('users', {
        'user_id': {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            COMMENT: '用户id'
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            COMMENT: '用户名'
        },
        account: {
            type: DataTypes.STRING,
            allowNull: false,
            COMMENT: '用户账号',
            unique: true
        },
        pwd: {
            type: DataTypes.STRING,
            allowNull: false,
            COMMENT: '用户密码'
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            COMMENT: '用户手机'
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            COMMENT: '用户邮箱'
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
            COMMENT: '描述'
        }
    },{
        timestamps: false,
        tableName: 'users',
        comment: '用户表'
      });

    return User;
}