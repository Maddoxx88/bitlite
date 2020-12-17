<template>
<form class="needs-validation container" novalidate>
  <div class="form-row">
    <div class="input-group my-3">
    <span class="input-group-text">First and last name</span>
    <input type="text" aria-label="First name" class="form-control">
    <input type="text" aria-label="Last name" class="form-control">
    </div>
    <div class="form-group col-sm-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4">
        <div class="invalid-tooltip">
          Please choose a unique and valid username.
        </div>
    </div>
    <div class="form-group col-sm-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        I would like to receive more updates
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary btn-lg">Submit Form</button>
</form>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'FreeTrial',
}
</script>

<style scoped>

</style>