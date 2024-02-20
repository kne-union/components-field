const { default: BatchSelect } = _BatchSelect;
const { createWithRemoteLoader } = remoteLoader;
const { default: SelectModal } = _SelectModal;
const { range } = lodash;

const BaseExample = createWithRemoteLoader({
  modules: ['components-core:FormInfo@Form']
})(({ remoteModules }) => {
  const [Form] = remoteModules;
  return (
    <Form>
      <SelectModal
        loader={() => {
          return {
            pageData: range(20).map(index => ({
              id: index,
              name: `张三${index}`,
              position: `职位${index}`,
              experience: `${index + 1}年`
            })),
            totalCount: 20
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
      >
        {({ modal }) => {
          return (
            <BatchSelect
              labelRender={({ label, value }) => {
                return `${label}:${(value && value.length) || 0}人`;
              }}
              label="本次预提候选人"
              name="candidate"
              rule="REQ"
              minLength={1}
              columns={[
                {
                  title: '候选人姓名',
                  name: 'name',
                  type: 'user'
                },
                {
                  title: '职位',
                  name: 'position',
                  type: 'mainInfo',
                  hover: false,
                  primary: false
                }
              ]}
              onAdd={(value, callback) => {
                modal({
                  title: '添加候选人',
                  defaultValue: value,
                  onConfirm: value => {
                    return callback(value);
                  }
                });
              }}
            />
          );
        }}
      </SelectModal>
    </Form>
  );
});

render(<BaseExample />);
