<MyPageForm
  {...emailForm.bindForm({
    async onSubmit(body) {
      EmailUpdateAction.submit({ body });
      setIsEmailEdit(!isEmailEdit);
      setShowAlert("0.3s animation-alert-fade-in forwards");
    },
  })}
></MyPageForm>;
