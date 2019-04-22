module.exports = (sequelize, DataType) => {
    const Author = sequelize.define('Author', {
        autId: {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
            primaryKey: true,
            COMMENT: '作者id'
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            COMMENT: '作者名'
        },
        account: {
            type: DataType.STRING,
            allowNull: false,
            unique: true,
            COMMENT: '作者账号'
        },
        phone: {
            type: DataType.STRING,
            allowNull: false,
            COMMENT: '作者手机号码'
        },
        pwd: {
            type: DataType.STRING,
            allowNull: false,
            COMMENT: '作者密码'
        },
        email: {
            type: DataType.STRING,
            allowNull: true,
            COMMENT: '作者邮箱'
        },
        description: {
            type: DataType.STRING,
            allowNull: true,
            COMMENT: '作者描述'
        }
    },{
        timestamps: true,
        tableName: 'author',
        comment: '书籍表'
    });

    return Author;
}