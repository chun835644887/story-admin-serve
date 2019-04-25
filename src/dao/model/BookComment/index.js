module.exports = (sequelize, DataType) => {
    const BookComment = sequelize.define('BookComment', {
        bcomId: {
            type: DataType.STRING,
            allowNull: false,
            primaryKey: true,
            COMMENT: '书籍类型id'
        },
        autId: {
            type: DataType.STRING,
            allowNull: false,
            COMMENT: '书籍作者id'
        },
        cusId: {
            type: DataType.STRING,
            allowNull: false,
            COMMENT: '用户id'
        },
        content: {
            type: DataType.TEXT,
            allowNull: true,
            COMMENT: '评论内容'
        },
        parentBcomId: {
            type: DataType.STRING,
            allowNull: true,
            COMMENT: '上级评论'
        }
    }, {
        timestamps: true,
        tableName: 'bookComment',
        comment: '书籍类型表'
    });

    return BookComment;
}