const { default: BatchSelect } = _BatchSelect;
const { createWithRemoteLoader } = remoteLoader;

const initFormData = {
  candidate: [
    { id: '1', name: '候选人1', position: '职位1' },
    { id: '2', name: '候选人2', position: '职位2' }
  ]
};

const BaseExample = createWithRemoteLoader({
  modules: ['components-core:FormInfo@Form']
})(({ remoteModules }) => {
  const [Form] = remoteModules;
  return (
    <Form data={initFormData}>
      <BatchSelect
        labelRender={({ label, value }) => {
          return `${label}:${(value && value.length) || 0}人`;
        }}
        label="本次预提候选人"
        name="candidate"
        rule="REQ"
        showBatchDelete={false}
        showRowSelection={false}
        showAdd={false}
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
      />
    </Form>
  );
});

render(<BaseExample />);
