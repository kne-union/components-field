
# SelectModal


### 概述

复杂信息选择弹窗


### 示例

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _SelectModal(@components/SelectModal),antd(antd),lodash(lodash)

```jsx
const { default: SelectModal } = _SelectModal;
const { Button } = antd;
const { range } = lodash;

const BaseExample = () => {
  return (
    <SelectModal
      loader={() => {
        return {
          pageData: range(28).map(index => ({
            id: index,
            name: `张三${index}`,
            position: `职位${index}`,
            experience: `${index + 1}年`,
            disabled: index > 10
          })),
          totalCount: 28
        };
      }}
      columns={[
        {
          title: '姓名',
          name: 'name',
          type: 'user'
        },
        {
          title: '职位',
          name: 'position',
          type: 'mainInfo',
          hover: false,
          primary: false
        },
        {
          title: '工作经验',
          name: 'experience',
          type: 'serialNumberShort'
        }
      ]}
      onChange={value => {
        console.log(value);
      }}
    >
      {({ modal }) => (
        <Button
          onClick={() => {
            modal({
              title: '请选择'
            });
          }}
        >
          点击
        </Button>
      )}
    </SelectModal>
  );
};

render(<BaseExample />);

```


### API

| 属性名 | 说明 | 类型 | 默认值 |
| ------ | ---- | ---- | ------ |

