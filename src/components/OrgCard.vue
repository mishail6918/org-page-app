<template>
    <div class="organization">
        <div class="modal">
            <div class="modal__content">
                <div class="modal__title">
                    <h2>Организация</h2>
                    <button class="modal__btn modal__btn--cancel" v-if="org.length === 0" v-show="editEmpty" @click="cancelForm()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0463 2.33521C12.4932 1.88826 13.2179 1.88826 13.6648 2.33521C14.1117 2.78215 14.1117 3.50678 13.6648 3.95372L9.61851 8L13.6648 12.0463C14.1117 12.4932 14.1117 13.2179 13.6648 13.6648C13.2179 14.1117 12.4932 14.1117 12.0463 13.6648L8 9.61851L3.95372 13.6648C3.50678 14.1117 2.78215 14.1117 2.33521 13.6648C1.88826 13.2179 1.88826 12.4932 2.33521 12.0463L6.38149 8L2.33521 3.95372C1.88826 3.50678 1.88826 2.78215 2.33521 2.33521C2.78215 1.88826 3.50678 1.88826 3.95372 2.33521L8 6.38149L12.0463 2.33521Z" fill="#353535"/>
                        </svg>
                        Отменить
                    </button>
                    <button class="modal__btn modal__btn--edit" v-if="org.length !== 0" v-show="!cancelFull" @click="editForm()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M3.38626 9.5322C3.19852 9.72124 2.94311 9.82756 2.67669 9.82756H1C0.723858 9.82756 0.5 9.6037 0.5 9.32756V7.62927C0.5 7.36526 0.604403 7.11197 0.790434 6.92463L7.48806 0.180176C7.60266 0.0648094 7.75807 0 7.92011 0C8.08216 0 8.23757 0.0648094 8.35217 0.180176L10.081 1.92048C10.1956 2.03589 10.2599 2.19238 10.2599 2.35556C10.2599 2.51874 10.1956 2.67524 10.081 2.79064L3.38626 9.5322ZM0.5 11.3846C0.5 11.0447 0.775517 10.7692 1.11539 10.7692H10.8846C11.2245 10.7692 11.5 11.0447 11.5 11.3846C11.5 11.7245 11.2245 12 10.8846 12H1.11538C0.775517 12 0.5 11.7245 0.5 11.3846Z" fill="#353535"/>
                        </svg>
                        Редактировать
                    </button>
                    <button class="modal__btn modal__btn--edit-full" v-if="org.length !== 0" v-show="cancelFull" @click="cancelForm()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0463 0.335205C10.4932 -0.111735 11.2179 -0.111735 11.6648 0.335205C12.1117 0.782145 12.1117 1.50678 11.6648 1.95372L7.61851 6L11.6648 10.0463C12.1117 10.4932 12.1117 11.2179 11.6648 11.6648C11.2179 12.1117 10.4932 12.1117 10.0463 11.6648L6 7.61851L1.95372 11.6648C1.50678 12.1117 0.782145 12.1117 0.335205 11.6648C-0.111735 11.2179 -0.111735 10.4932 0.335205 10.0463L4.38149 6L0.335205 1.95372C-0.111735 1.50678 -0.111735 0.782145 0.335205 0.335205C0.782145 -0.111735 1.50678 -0.111735 1.95372 0.335205L6 4.38149L10.0463 0.335205Z" fill="#353535"/>
                        </svg>
                        Отменить
                    </button>
                </div>
                <div class="modal__empty" v-if="org.length === 0">
                    <div class="heading" v-show="!editEmpty">
                        <p>Название организации, логотип и описание</p>
                        <button @click="addForm()" class="modal__btn modal__btn--add">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path d="M13.5 7H9.5V3C9.5 2.73478 9.39464 2.48043 9.20711 2.29289C9.01957 2.10536 8.76522 2 8.5 2C8.23478 2 7.98043 2.10536 7.79289 2.29289C7.60536 2.48043 7.5 2.73478 7.5 3V7H3.5C3.23478 7 2.98043 7.10536 2.79289 7.29289C2.60536 7.48043 2.5 7.73478 2.5 8C2.5 8.26522 2.60536 8.51957 2.79289 8.70711C2.98043 8.89464 3.23478 9 3.5 9H7.5V13C7.5 13.2652 7.60536 13.5196 7.79289 13.7071C7.98043 13.8946 8.23478 14 8.5 14C8.76522 14 9.01957 13.8946 9.20711 13.7071C9.39464 13.5196 9.5 13.2652 9.5 13V9H13.5C13.7652 9 14.0196 8.89464 14.2071 8.70711C14.3946 8.51957 14.5 8.26522 14.5 8C14.5 7.73478 14.3946 7.48043 14.2071 7.29289C14.0196 7.10536 13.7652 7 13.5 7Z" fill="#045CC4"/>
                            </svg>
                            Добавить
                        </button>
                    </div>
                    <form class="add-form" v-show="editEmpty" @submit.prevent="submitHandler">
                        <div class="add-form__field">
                            <label class="required">Тип</label>
                            <div class="__select" data-state="">
                                <div class="__select__title" data-default="Option 0" :class="{'err-input': errors.name}">Санаторий</div>
                                <div class="__select__content">
                                    <input :id="'singleSelect' + idx" :value="type" v-model="optType" class="__select__input" type="radio" name="singleSelect" v-for="(type, idx) of type" />
                                    <label v-bind:for="'singleSelect' + idx" class="__select__label" v-for="(type, idx) of type">{{type}}</label>
                                </div>
                            </div>
                            <span class="error-caption" v-if="errors">{{errors.type}}</span>
                        </div>
                        <div class="add-form__field">
                            <label for="org_name" class="required">Название организации</label>
                            <input type="text" id="org_name" v-model="optName" class="add-form__input" :class="{'err-input': errors.name}" placeholder='Санаторий "Огонёк"'>
                            <span class="error-caption" v-if="errors">{{errors.name}}</span>
                        </div>
                        <div class="add-form__field">
                            <label for="org_desc">Описание</label>
                            <textarea id="org_desc" v-model="optDesc" class="add-form__input add-form__input--area" placeholder='Санаторий "Огонёк"'/>
                            <p>Описание в модуле на сайте не показывается</p>
                        </div>
                        <div class="add-form__field">
                            <label class="required">Логотип</label>
                            <div class="add-form__image-field" :class="{'image-field-name': optImgName, 'err-input': errors.name}">
                                <div class="text">
                                    <h4>Загрузите изображение или перетащите файл сюда</h4>
                                    <p>Максимальный размер изображения 10 Мб.<br>
                                        Допустимые форматы: .jpeg .png .webp .svg</p>
                                    <div class="text__img" v-if="optImgName">{{optImgName}}</div>
                                </div>
                                <input id="org_img" type="file" ref="image" accept="image/jpeg, image/gif, image/png" @change="fileImage"/>
                                <label for="org_img" class="modal__btn modal__btn--add">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path d="M13.5 7H9.5V3C9.5 2.73478 9.39464 2.48043 9.20711 2.29289C9.01957 2.10536 8.76522 2 8.5 2C8.23478 2 7.98043 2.10536 7.79289 2.29289C7.60536 2.48043 7.5 2.73478 7.5 3V7H3.5C3.23478 7 2.98043 7.10536 2.79289 7.29289C2.60536 7.48043 2.5 7.73478 2.5 8C2.5 8.26522 2.60536 8.51957 2.79289 8.70711C2.98043 8.89464 3.23478 9 3.5 9H7.5V13C7.5 13.2652 7.60536 13.5196 7.79289 13.7071C7.98043 13.8946 8.23478 14 8.5 14C8.76522 14 9.01957 13.8946 9.20711 13.7071C9.39464 13.5196 9.5 13.2652 9.5 13V9H13.5C13.7652 9 14.0196 8.89464 14.2071 8.70711C14.3946 8.51957 14.5 8.26522 14.5 8C14.5 7.73478 14.3946 7.48043 14.2071 7.29289C14.0196 7.10536 13.7652 7 13.5 7Z" fill="#045CC4"/>
                                    </svg>
                                    Загрузить
                                </label>
                            </div>
                            <span class="error-caption" v-if="errors">{{errors.img}}</span>
                        </div>
                        <div class="add-form__field form-submit">
                            <button type="submit">Сохранить</button>
                        </div>
                    </form>
                </div>
                <div class="modal__full" v-else-if="org">
                    <form class="add-form" @submit.prevent="submitHandler">
                        <div class="add-form__field" :class="{readonly: !editFull}">
                            <h4 :class="{required: editFull}">Тип</h4>
                            <input type="text" class="add-form__input" :readonly="!editFull" v-show="!editFull" v-model="optType" :class="{'bold-text': !editFull}" required>
                            <div class="__select" data-state="" v-show="editFull">
                                <div class="__select__title" data-default="Option 0">{{optType}}</div>
                                <div class="__select__content">
                                    <input :id="'singleSelect' + idx" :value="type" v-model="optType" class="__select__input" type="radio" name="singleSelect" v-for="(type, idx) of type" />
                                    <label v-bind:for="'singleSelect' + idx" class="__select__label" v-for="(type, idx) of type">{{type}}</label>
                                </div>
                            </div>
                            <span class="error-caption" v-if="errors">{{errors.type}}</span>
                        </div>
                        <div class="add-form__field" :class="{readonly: !editFull}">
                            <h4 :class="{required: editFull}">Название организации</h4>
                            <input type="text" class="add-form__input"
                                   :readonly="!editFull"
                                   :class="{'bold-text': !editFull}"
                                   v-model="optName">
                            <span class="error-caption" v-if="errors">{{errors.name}}</span>
                        </div>
                        <div class="add-form__field" :class="{readonly: !editFull}" v-if="optDesc">
                            <h4>Описание</h4>
                            <textarea class="add-form__input"
                                      :readonly="!editFull"
                                      v-model="optDesc"
                                      :class="{'bold-text': !editFull}">
                                {{optDesc}}
                            </textarea>
                        </div>
                        <div class="add-form__field" :class="{readonly: !editFull}">
                            <h4 :class="{required: editFull}" class="add-form__image-heading">Логотип</h4>
                            <div class="add-form__image">
                                <div class="image-field" :style="{'background-image': 'url(' + optImg + ')'}">
                                    <input type="file" ref="image" accept="image/jpeg, image/gif, image/png" :disabled="!editFull" @change="fileImageUpd">
                                </div>
                            </div>
                            <span class="error-caption" v-if="errors">{{errors.img}}</span>
                        </div>
                        <div class="add-form__field form-submit" v-if="editFull">
                            <button type="submit">Сохранить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OrgCard",
        data() {
          return {
              type: ['Санаторий', 'База отдыха', 'Детский лагерь'],
              optType: this.$store.getters.org.type || '',
              optName: this.$store.getters.org.name || '',
              optDesc: this.$store.getters.org.desc || '',
              optImg: this.$store.getters.org.image || '[]',
              optImgName: null,
              editEmpty: null,
              editFull: null,
              cancelFull: null,
              errors: {},
          }
        },
        mounted() {
            const addForm = document.querySelector('.add-form');
            if (addForm) {
                const selectSingle = document.querySelector('.__select');
                const selectSingle_title = selectSingle.querySelector('.__select__title');
                const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');
                selectSingle_title.addEventListener('click', () => {
                    if ('active' === selectSingle.getAttribute('data-state')) {
                        selectSingle.setAttribute('data-state', '');
                    } else {
                        selectSingle.setAttribute('data-state', 'active');
                    }
                });
                for (let i = 0; i < selectSingle_labels.length; i++) {
                    selectSingle_labels[i].addEventListener('click', (e) => {
                        selectSingle_title.textContent = e.target.textContent;
                        selectSingle.setAttribute('data-state', '');
                    });
                }
            }
        },
        computed: {
            org() {
                return this.$store.getters.org;
            },
        },
        methods: {
            addForm() {
                this.editEmpty = true;
            },
            cancelForm() {
                this.editEmpty = false;
                this.cancelFull = false;
                this.editFull = false;
                this.optImg = this.$store.getters.org.image;
            },
            editForm() {
                this.editFull = true;
                this.cancelFull = true;
            },
            fileImage(e) {
                this.optImgName =  this.$refs.image.files[0].name;
                let reader = new FileReader();
                let imagesData = [];
                reader.onload = (e) => {
                    imagesData.push(e.target.result);
                }
                reader.readAsDataURL(this.$refs.image.files[0]);
                this.optImg = imagesData;
            },
            fileImageUpd() {
                const [file] = this.$refs.image.files;
                if (file) {
                    this.optImg = URL.createObjectURL(file);
                }
            },
            submitHandler(e) {
                this.errors = {};
                if (this.optType === '') {
                    this.errors.type = 'Выберите тип организации';
                    e.preventDefault();
                }
                if (this.optName === '') {
                    this.errors.name = 'Укажите название организации';
                    e.preventDefault();
                }
                if (this.optImg === '[]') {
                    this.errors.img = 'Добавьте логотип';
                    e.preventDefault();
                }
                let count = 0;
                for (let key in this.errors) {
                    count++;
                }
                if (!count) {
                    const org = {
                        name: this.optName,
                        type: this.optType,
                        desc: this.optDesc,
                        image: this.optImg
                    }
                    this.$store.dispatch('createOrg', org);
                }
            }
        },
    }
</script>

<style lang="scss">
    .organization {
        width: 100%;
        height: 100%;
        position: fixed;
    }
    .modal {
        background-color: #fff;
        padding: 24px;
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.04);
        border-radius: 16px;
        width: 722px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        overflow: auto;
        &__title {
            text-align: left;
            color: #353535;
            margin-bottom: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            h2 {
                font-weight: 700;
                font-size: 20px;
                font-family: 'Inter', sans-serif;
            }
        }
        &__btn {
            font-weight: 500;
            line-height: 20px;
            font-size: 14px;
            background-color: #EDEDED;
            border: none;
            outline: none;
            border-radius: 6px;
            padding: 4px 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: 0.3s;
            svg {
                margin-right: 8px;
            }
            &:hover {
                color: #7b7b7b;
                background-color: #fff;
            }
            &--add {
                margin: 0 auto;
                background-color: #E8F2FE;
                color: #045CC4;
                &:hover {
                    color: #045CC4;
                    background-color: #D9EAFE;
                    transition: 0.3s;
                    svg path{
                        fill: #045CC4;
                    }
                }
                &:active {
                    color: #045CC4;
                    background-color: #A6CEFD;
                    svg path{
                        fill: #045CC4;
                    }
                }
            }
        }
        &__empty {
            .add-form__field {
                label {
                    font-weight: 500;
                }
            }
        }
        &__full {
            .bold-text {
                font-weight: 500;
            }
            .add-form__image-heading {
                font-weight: 500;
            }
        }
    }
    .heading {
        p {
            font-size: 16px;
            margin-bottom: 16px;
        }
    }
    .add-form {
        &__field {
            margin-bottom: 16px;
            text-align: left;
            .required {
                &::before {
                    content: '*';
                    color: #D91D0B;
                    margin-right: 2px;
                }
            }
            p {
                line-height: 20px;
                color: #656565;
                font-size: 14px;
                margin-top: -9px;
            }
        }
        &__input {
            margin-top: 5px;
            width: 100%;
            border: 1px solid #C8C8C8;
            border-radius: 8px;
            padding: 8px;
            font-size: 16px;
            line-height: 24px;
            font-family: inherit;
            &--area {
                min-height: 80px;
                resize: vertical;
                max-height: 200px;
            }
        }
        &__image {
            width: 164px;
            height: 164px;
            background-color: #fff;
            border-radius: 8px;
            border: 1px solid var(--stroke-light, #EDEDED);
            padding: 8px;
            margin-top: 5px;
            .image-field {
                width: 100%;
                height: 100%;
                background-size: cover;
                background-position: center center;
            }
            input {
                font-size: 0;
                border: none;
                outline: none;
                cursor: pointer;
                opacity: 0;
                width: 100%;
                height: 100%;
            }
        }
        .error-caption {
            color: #B80020;
        }
        .err-input {
            border-color: #B80020;
        }
        &__image-field {
            border-radius: 8px;
            border: 1px dashed var(--stroke-grey, #C8C8C8);
            text-align: center;
            display: flex;
            min-height: 142px;
            align-items: flex-end;
            justify-content: center;
            width: 100%;
            position: relative;
            .text {
                position: absolute;
                top: 16px;
                text-align: center;
                width: 100%;
                p {
                    margin-top: 0;
                }
                .text__img {
                    margin: 5px 0px;
                }
            }
            input {
                width: 100%;
                height: 100%;
                font-size: 0;
                border: 0;
                outline: none;
                opacity: 0;
                text-align: center;
            }
            label {
                position: absolute;
                bottom: 16px;
            }
        }
        .image-field-name {
            min-height: 160px;
        }
        .form-submit {
            width: 100%;
            button {
                width: 100%;
                background-color: #1588C9;
                border-radius: 8px;
                color: #fff;
                padding: 12px 0px;
                border: none;
                outline: none;
                cursor: pointer;
                transition: 0.3s;
                &:hover {
                    background-color: #1588C9;
                }
                &:active {
                    background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), #1588C9;
                }
            }
        }
    }
    .readonly {
        margin-bottom: 12px;
        .add-form__input {
            outline: none;
            border: none;
            resize: none;
            max-height: 24px;
            border-radius: 0;
            padding: 0;
            margin: 0;
        }
        .add-form__image {
            input {
                cursor: initial;
            }
        }
    }
    .__select {
        position: relative;
        width: 100%;
        height: 40px;
        margin: 0 auto;
        &[data-state="active"] {
            .__select__title {
                &::before {
                     transform: translate(-3px, -50%) rotate(-45deg);
                }
                &::after {
                     transform: translate(3px, -50%) rotate(45deg);
                }
            }
            .__select__content {
                opacity: 1;
            }
            .__select__label {
                max-height: 40px;
                border-top-width: 1px;
            }
        }
    }
    .__select__title {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 8px;
        border-radius: 5px;
        border: solid 1px #c7ccd1;
        cursor: pointer;
        color: #656565;
        font-size: 16px;
        &::before, &::after {
            content: "";
            position: absolute;
            top: 50%;
            right: 16px;
            display: block;
            width: 10px;
            height: 2px;
            transition: all 0.3s ease-out;
            background-color: #A4A4A4;
            transform: translate(-3px, -50%) rotate(45deg);
        }
        &::after {
            transform: translate(3px, -50%) rotate(-45deg);
        }
        &:hover {
            border-color: #0A0A0A;
            &::before,
            &::after {
                background-color: #0A0A0A;
            }
        }
    }
    .__select__content {
        position: absolute;
        top: 40px;
        left: 3px;
        display: flex;
        flex-direction: column;
        width: calc(100% - 6px);
        background-color: #ffffff;
        border: 1px solid #c7ccd1;
        border-top: none;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        transition: all 0.3s ease-out;
        opacity: 0;
        z-index: 8;
    }
    .__select__input {
        display: none;

        &:checked + label {
            background-color: #dedede;
        }
        &:disabled + label {
            opacity: 0.6;
            pointer-events: none;
        }
    }
    .__select__label {
        display: flex;
        align-items: center;
        width: 100%;
        height: 40px;
        max-height: 0;
        padding: 0 16px;
        transition: all 0.2s ease-out;
        cursor: pointer;
        overflow: hidden;
        font-size: 16px;
        & + input + & {
            border-top: 0 solid #C7CCD160;
        }
        &:hover {
            background-color: #C7CCD160 !important;
            color: #0A0A0A;
        }
    }
    @media screen and (max-width: 768px) {
        .modal {
            width: 90%;
            height: auto;
            max-height: 95%;
        }
    }
    @media screen and (max-width: 425px) {
        .add-form__image-field {
            min-height: 160px;
        }
    }
    @media screen and (max-width: 375px) {
        .modal {
            &__title {
                flex-direction: column;
                margin-bottom: 0;
                h2 {
                    margin-bottom: 15px;
                }
            }
        }
        .add-form__image-field {
            min-height: 180px;
            padding: 8px;
            .text {
                width: 90%;
                font-size: 12px;
                p {
                    font-size: 12px;
                }
            }
        }
    }
</style>
