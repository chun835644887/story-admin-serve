module.exports = (sequelize, DataType) => {
    const Book = sequelize.define('book', {
        bookId: {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
            primaryKey: true,
            COMMENT: '书籍id'
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            COMMENT: '书名'
        },
        code: {
            type: DataType.STRING,
            allowNull: false,
            COMMENT: '书籍编码'
        },
        bookTypeId: {
            type: DataType.STRING,
            allowNull: false,
            COMMENT: '书籍类型id'
        },
        description: {
            type: DataType.STRING,
            allowNull: true,
            COMMENT: '书籍描述'
        },
        lastSectionName: {
            type: DataType.STRING,
            allowNull: true,
            COMMENT: '最新章节'
        },
        lastSectionNameId: {
            type: DataType.STRING,
            allowNull: true,
            COMMENT: '最新章节id'
        },
        bookStatus: {
            type: DataType.STRING,
            allowNull: true,
            defaultValue: '0',
            COMMENT: '书籍状态'
        },
        authorName: {
            type: DataType.STRING,
            allowNull: false,
            COMMENT: '书籍作者'
        },
        authorNameId: {
            type: DataType.STRING,
            allowNull: false,
            COMMENT: '书籍作者id'
        }
    },{
        timestamps: true,
        tableName: 'book',
        comment: '书籍表'
    });

    return Book;
}