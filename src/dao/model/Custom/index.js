module.exports = (sequelize, DataType) => {
    const Custom = sequelize.define('Custom', {
        cusId: {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
            primaryKey: true,
            COMMENT: '用户id'
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            COMMENT: '用户名'
        },
        account: {
            type: DataType.STRING,
            allowNull: false,
            unique: true,
            COMMENT: '账号'
        },
        phone: {
            type: DataType.STRING,
            allowNull: true,
            COMMENT: '手机号码'
        },
        pwd: {
            type: DataType.STRING,
            allowNull: false,
            COMMENT: '密码'
        },
        email: {
            type: DataType.STRING,
            allowNull: true,
            COMMENT: '邮箱'
        },
        roleType: {
            type: DataType.STRING,
            allowNull: false,
            defaultValue: '0',
            COMMENT: '角色类型'
        },
        description: {
            type: DataType.STRING,
            allowNull: true,
            COMMENT: '描述'
        }
    },{
        timestamps: true,
        tableName: 'custom',
        comment: '用户表'
    });

    return Custom;
}