module.exports = (sequelize, DataType) => {
    const BookType = sequelize.define('BookType', {
        bookTypeId: {
            type: DataType.STRING,
            allowNull: false,
            primaryKey: true,
            COMMENT: '书籍类型id'
        },
        typeName: {
            type: DataType.STRING,
            allowNull: false,
            unique: true,
            COMMENT: '书籍类型'
        },
        typeCode: {
            type: DataType.STRING,
            allowNull: false,
            unique: true,
            COMMENT: '书籍类型编码'
        },
        description: {
            type: DataType.STRING,
            allowNull: true,
            COMMENT: '书籍类型描述'
        }
    }, {
        timestamps: true,
        tableName: 'bookType',
        comment: '书籍类型表'
    });

    return BookType;
}