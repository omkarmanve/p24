import { F as FormKitLazyProvider, d as FormKit_default } from './server.mjs';
import { reactive, ref, mergeProps, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';
import '@formkit/core';
import '@formkit/utils';
import '@formkit/observer';
import '@formkit/rules';
import '@formkit/validation';
import '@formkit/i18n';
import '@formkit/inputs';
import '@formkit/themes';
import '@formkit/dev';

const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({
      name: "",
      last: "",
      userName: "",
      age: null,
      mobile: ""
    });
    const editingId = ref(null);
    const data = ref([]);
    let nextId = 1;
    function saveUser() {
      if (editingId.value !== null) {
        const index = data.value.findIndex((u) => u.id === editingId.value);
        if (index !== -1) {
          data.value[index] = { id: editingId.value, ...form };
        }
        editingId.value = null;
      } else {
        data.value.push({ id: nextId++, ...form });
      }
      form.name = "";
      form.last = "";
      form.userName = "";
      form.age = null;
      form.mobile = "";
    }
    function removeUser(id) {
      data.value = data.value.filter((u) => u.id !== id);
    }
    function editUser(user) {
      editingId.value = user.id;
      form.name = user.name;
      form.last = user.last;
      form.userName = user.userName;
      form.age = user.age;
      form.mobile = user.mobile;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormKit = FormKit_default;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FormKitLazyProvider), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4 p-4 w-[350px] bg-gray-100 rounded-lg shadow"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "form",
              onSubmit: saveUser
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormKit, {
                    name: "name",
                    label: "Name",
                    type: "text",
                    modelValue: form.name,
                    "onUpdate:modelValue": ($event) => form.name = $event,
                    validation: "required",
                    placeholder: "First Name",
                    maxlength: "20"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormKit, {
                    name: "last",
                    label: "Last Name",
                    type: "text",
                    modelValue: form.last,
                    "onUpdate:modelValue": ($event) => form.last = $event,
                    validation: "required",
                    placeholder: "Last Name",
                    maxlength: "20"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormKit, {
                    name: "userName",
                    label: "Username",
                    type: "text",
                    modelValue: form.userName,
                    "onUpdate:modelValue": ($event) => form.userName = $event,
                    validation: "required",
                    placeholder: "Username",
                    maxlength: "10"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormKit, {
                    name: "age",
                    label: "Age",
                    type: "number",
                    modelValue: form.age,
                    "onUpdate:modelValue": ($event) => form.age = $event,
                    validation: "required|integer|min:0|max:99",
                    placeholder: "Age"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormKit, {
                    name: "mobile",
                    label: "Mobile No",
                    type: "text",
                    modelValue: form.mobile,
                    "onUpdate:modelValue": ($event) => form.mobile = $event,
                    validation: "required|length:10|integer",
                    placeholder: "Mobile No"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormKit, {
                    type: "submit",
                    label: "Save User",
                    class: "w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormKit, {
                      name: "name",
                      label: "Name",
                      type: "text",
                      modelValue: form.name,
                      "onUpdate:modelValue": ($event) => form.name = $event,
                      validation: "required",
                      placeholder: "First Name",
                      maxlength: "20"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_FormKit, {
                      name: "last",
                      label: "Last Name",
                      type: "text",
                      modelValue: form.last,
                      "onUpdate:modelValue": ($event) => form.last = $event,
                      validation: "required",
                      placeholder: "Last Name",
                      maxlength: "20"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_FormKit, {
                      name: "userName",
                      label: "Username",
                      type: "text",
                      modelValue: form.userName,
                      "onUpdate:modelValue": ($event) => form.userName = $event,
                      validation: "required",
                      placeholder: "Username",
                      maxlength: "10"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_FormKit, {
                      name: "age",
                      label: "Age",
                      type: "number",
                      modelValue: form.age,
                      "onUpdate:modelValue": ($event) => form.age = $event,
                      validation: "required|integer|min:0|max:99",
                      placeholder: "Age"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_FormKit, {
                      name: "mobile",
                      label: "Mobile No",
                      type: "text",
                      modelValue: form.mobile,
                      "onUpdate:modelValue": ($event) => form.mobile = $event,
                      validation: "required|length:10|integer",
                      placeholder: "Mobile No"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_FormKit, {
                      type: "submit",
                      label: "Save User",
                      class: "w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-6 w-[600px]"${_scopeId}><h2 class="text-lg font-bold mb-2"${_scopeId}>Users:</h2><ul${_scopeId}><!--[-->`);
            ssrRenderList(data.value, (user) => {
              _push2(`<li class="mb-2"${_scopeId}> ID: ${ssrInterpolate(user.id)} - ${ssrInterpolate(user.name)} ${ssrInterpolate(user.last)} (${ssrInterpolate(user.userName)}) - Age: ${ssrInterpolate(user.age)}, Mobile: ${ssrInterpolate(user.mobile)} <button class="ml-2 bg-yellow-500 text-white px-2 rounded"${_scopeId}> Update </button><button class="ml-2 bg-red-500 text-white px-2 rounded"${_scopeId}> Remove </button></li>`);
            });
            _push2(`<!--]--></ul></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4 p-4 w-[350px] bg-gray-100 rounded-lg shadow" }, [
                createVNode(_component_FormKit, {
                  type: "form",
                  onSubmit: saveUser
                }, {
                  default: withCtx(() => [
                    createVNode(_component_FormKit, {
                      name: "name",
                      label: "Name",
                      type: "text",
                      modelValue: form.name,
                      "onUpdate:modelValue": ($event) => form.name = $event,
                      validation: "required",
                      placeholder: "First Name",
                      maxlength: "20"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_FormKit, {
                      name: "last",
                      label: "Last Name",
                      type: "text",
                      modelValue: form.last,
                      "onUpdate:modelValue": ($event) => form.last = $event,
                      validation: "required",
                      placeholder: "Last Name",
                      maxlength: "20"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_FormKit, {
                      name: "userName",
                      label: "Username",
                      type: "text",
                      modelValue: form.userName,
                      "onUpdate:modelValue": ($event) => form.userName = $event,
                      validation: "required",
                      placeholder: "Username",
                      maxlength: "10"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_FormKit, {
                      name: "age",
                      label: "Age",
                      type: "number",
                      modelValue: form.age,
                      "onUpdate:modelValue": ($event) => form.age = $event,
                      validation: "required|integer|min:0|max:99",
                      placeholder: "Age"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_FormKit, {
                      name: "mobile",
                      label: "Mobile No",
                      type: "text",
                      modelValue: form.mobile,
                      "onUpdate:modelValue": ($event) => form.mobile = $event,
                      validation: "required|length:10|integer",
                      placeholder: "Mobile No"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_FormKit, {
                      type: "submit",
                      label: "Save User",
                      class: "w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mt-6 w-[600px]" }, [
                createVNode("h2", { class: "text-lg font-bold mb-2" }, "Users:"),
                createVNode("ul", null, [
                  (openBlock(true), createBlock(Fragment, null, renderList(data.value, (user) => {
                    return openBlock(), createBlock("li", {
                      key: user.id,
                      class: "mb-2"
                    }, [
                      createTextVNode(" ID: " + toDisplayString(user.id) + " - " + toDisplayString(user.name) + " " + toDisplayString(user.last) + " (" + toDisplayString(user.userName) + ") - Age: " + toDisplayString(user.age) + ", Mobile: " + toDisplayString(user.mobile) + " ", 1),
                      createVNode("button", {
                        onClick: ($event) => editUser(user),
                        class: "ml-2 bg-yellow-500 text-white px-2 rounded"
                      }, " Update ", 8, ["onClick"]),
                      createVNode("button", {
                        onClick: ($event) => removeUser(user.id),
                        class: "ml-2 bg-red-500 text-white px-2 rounded"
                      }, " Remove ", 8, ["onClick"])
                    ]);
                  }), 128))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-CFE1zbIK.mjs.map
