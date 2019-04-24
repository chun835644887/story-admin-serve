module.exports = (sequelize, DataType) => {
    const Manager = sequelize.define('Manager', {
        manId: {
            type: DataType.STRING,
            allowNull: false,
            primaryKey: true,
            COMMENT: '管理员id'
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            COMMENT: '管理员名'
        },
        account: {
            type: DataType.STRING,
            allowNull: false,
            unique: true,
            COMMENT: '管理员账号'
        },
        phone: {
            type: DataType.STRING,
            allowNull: false,
            COMMENT: '管理员手机号码'
        },
        pwd: {
            type: DataType.STRING,
            allowNull: false,
            COMMENT: '管理员账号密码'
        },
        email: {
            type: DataType.STRING,
            allowNull: true,
            COMMENT: '管理员邮箱'
        },
        description: {
            type: DataType.STRING,
            allowNull: true,
            COMMENT: '管理员描述'
        }
    },{
        timestamps: true,
        tableName: 'manager',
        comment: '管理员表'
    });

    return Manager;
}