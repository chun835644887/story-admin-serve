module.exports = (sequelize, DataType) => {
    const Collection = sequelize.define('Collection', {
        colId: {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
            primaryKey: true,
            COMMENT: '收藏id'
        },
        bookId: {
            type: DataType.STRING,
            allowNull: false,
            COMMENT: '书籍id'
        },
        customId: {
            type: DataType.STRING,
            allowNull: false,
            COMMENT: '用户id'
        }
    },{
        timestamps: true,
        tableName: 'collection',
        comment: '收藏表'
    });

    return Collection;
}