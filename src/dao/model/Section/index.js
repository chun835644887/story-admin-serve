module.exports = (sequelize, DataType) => {
    const Section = sequelize.define('section', {
        sectionId: {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
            primaryKey: true,
            COMMENT: '章节id'
        },
        authorId: {
            type: DataType.STRING,
            allowNull: false,
            COMMENT: '作者id'
        },
        authorName: {
            type: DataType.STRING,
            allowNull: false,
            COMMENT: '作者名字'
        },
        title: {
            type: DataType.STRING,
            allowNull: false,
            COMMENT: '章节标题'
        },
        content: {
            type: DataType.TEXT,
            allowNull: false,
            COMMENT: '章节内容'
        },
        sequence: {
            type: DataType.INTEGER,
            allowNull: true,
            COMMENT: '章节序列'
        }
    },{
        timestamps: true,
        tableName: 'section',
        comment: '书籍章节表'
    });

    return Section;
}