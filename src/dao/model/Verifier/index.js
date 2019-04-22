module.exports = (sequelize, DataType) => {
    const Verifier = sequelize.define('Verifier', {
        verId: {
            type: DataType.STRING,
            allowNull: false,
            primaryKey: true,
            COMMENT: '检验者id'
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            COMMENT: '检验者名'
        },
        account: {
            type: DataType.STRING,
            allowNull: false,
            unique: true,
            COMMENT: '检验者账号'
        },
        phone: {
            type: DataType.STRING,
            allowNull: false,
            COMMENT: '检验者手机号码'
        },
        pwd: {
            type: DataType.STRING,
            allowNull: false,
            COMMENT: '检验者账号密码'
        },
        email: {
            type: DataType.STRING,
            allowNull: true,
            COMMENT: '检验者邮箱'
        },
        description: {
            type: DataType.STRING,
            allowNull: true,
            COMMENT: '检验者描述'
        }
    },{
        timestamps: true,
        tableName: 'verifier',
        comment: '检验者'
    });

    return Verifier;
}