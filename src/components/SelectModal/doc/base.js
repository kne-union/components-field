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
