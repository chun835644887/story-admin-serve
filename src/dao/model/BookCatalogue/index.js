module.exports = (sequelize, DataType) => {
    const BookCatalogue = sequelize.define('BookCatalogue', {
        bcatId: {
            type: DataType.STRING,
            allowNull: false,
            primaryKey: true,
            COMMENT: '书籍类型id'
        },
        cusId: {
            type: DataType.STRING,
            allowNull: false,
            COMMENT: '书籍作者id'
        },
        sectionList: {
            type: DataType.TEXT,
            allowNull: true,
            COMMENT: '书籍目录'
        }
    }, {
        timestamps: true,
        tableName: 'bookCatalogue',
        comment: '书籍类型表'
    });

    return BookCatalogue;
}