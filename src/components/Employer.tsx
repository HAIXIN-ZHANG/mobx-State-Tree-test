import * as React from "react";

interface EmployerComponentProps {}

interface EmployerComponentState {}

class EmployerComponent extends React.Component<
  EmployerComponentProps,
  EmployerComponentState
> {
  constructor(props: EmployerComponentProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>hi</p>
      </div>
    );
  }
}
export { EmployerComponent };
