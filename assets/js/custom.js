 $(function(){
        $('[rel="popover"]').popover({
            container: 'body',
            html: true,
            content: function () {
                var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
                return clone;
            }
        }).click(function(e) {
            e.preventDefault();
        });
        $('#countrydropdown>li>a').click(function() {
            $('#dropdownMenu1').html($(this).html());
        })

        $('#importexportdata>li>a').click(function() {

            $('#dropdownMenu2').html($(this).html());
            
        })

        $('#importexportdata>li>a').click(importExportComboBox);

        $('#blank_cons_control').change(function () {
            if($(this).prop('checked') == false) $('.blank_cons').hide();
            else $('.blank_cons').show();
        });
        $('#exc_master_control').change(function () {
            if($(this).prop('checked') == false) $('.exc_master').hide();
            else $('.exc_master').show();
        });
        $('#house_only_control').change(function () {
            if($(this).prop('checked') == false) $('.house_only').hide();
            else $('.house_only').show();
        });
        $('#master_only_control').change(function () {
            if($(this).prop('checked') == false) $('.master_only').hide();
            else $('.master_only').show();
        });
        $('#consignee_control').change(function () {
            if($(this).prop('checked') == false) $('.consignee').hide();
            else $('.consignee').show();
        });
        $('#shipper_control').change(function () {
            if($(this).prop('checked') == false) $('.shipper').hide();
            else $('.shipper').show();
        });
        $('#country_origin_control').change(function () {
            if($(this).prop('checked') == false) $('.country_origin').hide();
            else $('.country_origin').show();
        });
        $('#vessel_name_control').change(function () {
            if($(this).prop('checked') == false) $('.vessel_name').hide();
            else $('.vessel_name').show();
        });
        $('#foreign_port_control').change(function () {
            if($(this).prop('checked') == false) $('.foreign_port').hide();
            else $('.foreign_port').show();
        });

        $('.refine_controls').change(function() {
            if($('.refine_controls:checked').length == 0) $('#refineFilter').hide();
            else if($('.refine_controls:checked').length == 1) $('#refineFilter').show();
        });


        $('#blank_cons_close').click(function() {
            $('#blank_cons_control').prop('checked', false).change();
        });

        $('#exc_master_close').click(function() {
            $('#exc_master_control').prop('checked', false).change();
        });

        $('#house_only_close').click(function() {
            $('#house_only_control').prop('checked', false).change();
        });

        $('#master_only_close').click(function() {
            $('#master_only_control').prop('checked', false).change();
        });

        $('#consignee_close').click(function() {
            $('#consignee_control').prop('checked', false).change();
        });

        $('#shipper_close').click(function() {
            $('#shipper_control').prop('checked', false).change();
        });

        $('#vessel_name_close').click(function() {
            $('#vessel_name_control').prop('checked', false).change();
        });

        $('#country_origin_close').click(function() {
            $('#country_origin_control').prop('checked', false).change();
        });

        $('#foreign_port_close').click(function() {
            $('#foreign_port_control').prop('checked', false).change();
        });

        $('#clearfilter').click(function() {
            $('#blank_cons_control').prop('checked', false).change();
            $('#exc_master_control').prop('checked', false).change();
            $('#house_only_control').prop('checked', false).change();
            $('#master_only_control').prop('checked', false).change();
            $('#consignee_control').prop('checked', false).change();
            $('#shipper_control').prop('checked', false).change();
            $('#country_origin_control').prop('checked', false).change();
            $('#vessel_name_control').prop('checked', false).change();
            $('#foreign_port_control').prop('checked', false).change();
            $('#blank_cons_control').prop('checked', false).change();
        });

        if($('.refine_controls:checked').length == 0) $('#refineFilter').hide();
        else if($('.refine_controls:checked').length == 1) $('#refineFilter').show();

        $( "#searchBar" ).autocomplete({
            source: [ "apple tv", "apple brand", "banana", "apple inc.", "apple usa", "apple china", "apple canada" ],
            open: function(event, ui) {
                $('.ui-front').css("top", parseInt($('.ui-front').css("top")) - 1 );
            },
            select: function() {
                $('.loader-container').show();
                setTimeout(function() {
                    $('#showResultsFor').show();
                    $('#showResultsFor').show();
                    $('button#clearfilter').show();
                    $('#moreFilters').show();
                    $('button.btn.save').show();
                    $('.loader-container').hide();
                    $("a[data-tab|='new-tab']").click();
                    addToHistory();                    
                }, 1000);
            }
        }).data('ui-autocomplete')._renderMenu = function( ul, items ) {
            var that = this;
            $.each( items, function( index, item ) {
                that._renderItemData( ul, item );
                if (index === 0) {
                    that._renderItemData( ul, {
                        label: "In Shipment",
                        value: "In Shipment",
                    });

                    that._renderItemData( ul, {
                        label: "In Consignee",
                        value: "In Consignee",
                    });
                }
            });

            $(ul).find("li:nth-child(2)").addClass('autosuggest-category');
            $(ul).find("li:nth-child(3)").addClass('autosuggest-category');
        };
    });

    function addToHistory () {
        var searchName = $('#searchBar').val();
        var insertSearchHistory = `
            <li class=${colors[(colorCtr++)%colors.length]}>
                <div class="top-controls">
                    <i class="fa fa-search"></i>
                    <i class="fa fa-trash"></i>
                </div>
                <h4>${searchName}</h4>
                <p>Search term for PH Import Data generated 25,000 results.</p>
                <i class="fa fa-calendar-o"></i><span>2017-06-08</span>
            </li>
        `;
        $('.history-panel ul').prepend(insertSearchHistory);
    }

    var colors = ["color-option-blue", "color-option-green", "color-option-purple"];
    var colorCtr = 0;

    $(function() {

        $('input[name="daterange"]').daterangepicker({
            "opens": "left"
        });

        $('.nav-tab').click(function (e) {
            var active = $('.nav-tab.active').data('tab');

            $('#' + active).hide();
            $('.nav-tab.active').removeClass('active')

            $(e.target).addClass('active');
            var new_active =  $(e.target).data('tab');
            $('#' + new_active).show();
        });

        $('.option-fields>div>button').click(function () {
            $('.template-view-container').toggle();
            $('.dropdown').toggleClass('open');
        });

        var cardView = false;
        $('.card-view-icon').click(function (e) {
            $('.card-view-icon').toggleClass('table-view-icon');
            $('.table-view').toggleClass('hide');
            $('.card-view').toggleClass('visible');
            $('.card-footer').toggleClass('hide');
            cardView = !cardView;
        });

        function getScrollTop() {
            return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        }

        function getDocumentHeight() {
            const body = document.body;
            const html = document.documentElement;

            return Math.max(
                body.scrollHeight, body.offsetHeight,
                html.clientHeight, html.scrollHeight, html.offsetHeight
            );
        };

        window.onscroll = function () {
            if (getScrollTop() < getDocumentHeight() - window.innerHeight || !cardView) return;
            // console.log(getScrollTop(), getDocumentHeight(), window.innerHeight)
            addCardPage(cardPage++);
        }

        $('.full-window-icon').click(function () {
            $('.full-window-icon').toggleClass('minimize-window-icon');
        });

        $('.nav-tabs li a').click(function (e) {
            $('.custom-template-container').hide();
            $('.template-container').show();
            $('.toolbar-links a.save').hide();
            $('.toolbar-links a.clear').hide();
            $('.toolbar-links a.edit').show();
        });

        /*
        Scripts related to templates
        */
        var fields = [
          'US Port',
          'Container Number',
          'Master B/L',
          'Place of Receipt',
          'Vessel Name',
          'Quantity',
          'Ship Registered In',
          'Notify Party',
          'Notify Address',
          'Quantity Unit',
          'In-Bond Entry Type',
          'Country of Origin',
          'Marks And Numbers',
          'Measurement',
          'Carrier Code / Name',
          'Arrival Date',
          'Consignee Address',
          'Measurement Unit',
          'Carrier City',
          'Shipper Address',
          'Distribution Port',
          'Carrier State',
          'Zip Code',
          'Carrier Address',
          'Bill Of Lading',
          'Foreign Port',
          'No. of Containers',
          'House vs Master',
          'Carrier Zip',
          'Product Description',
          'Consignee',
          'Shipper',
          'Arrival Date',
          'Gross Weight(Lb)',
        ];

        var templates = [
          {
            name: 'Default View',
            fields: [
              'Product Description',
              'Consignee',
              'Shipper',
              'Arrival Date',
              'Gross Weight(Lb)',
            ]
          }
        ];

        var activeTemplate = 0;
        var templatesIsEditable = false;
        var prevTemplateState;

        $('button.edit').click(function (e) {

            $('.middle-col').removeClass('full-width');
            $('.fields-col').removeClass('hide');
            $('.option-fields .open .template-view-container button.edit').addClass('hide');
            $('.option-fields .open .template-view-container button.delete').removeClass('hide');
            $('.option-fields .open .template-view-container .list-box').addClass('delete-item');

            $('button.delete').removeClass('disabled');
            if (!activeTemplate) {
                $('button.delete').addClass('disabled');
            }

            if (!templates[activeTemplate].fields.length) {
                $('.template-tab-container .tab-content .active .item-container').html(`<div class="empty-box">Click to select items on the right to create your custom template.</div>`);
            }

            if (activeTemplate === 0 && templates[activeTemplate].fields.length <= 3) {
                $('.template-tab-container  .tab-pane.active i').addClass('disabled');
            }
            templatesIsEditable = true;
            prevTemplateState =  JSON.parse(JSON.stringify(templates));
            $('.template-container .tab-pane .item-container').each(function (el) {
                var sortable = Sortable.create($('.template-container .tab-pane .item-container')[el], {
                    onUpdate: function (evt) {
                        var el = templates[activeTemplate].fields.splice(evt.oldIndex, 1)[0];
                        templates[activeTemplate].fields.splice(evt.newIndex, 0, el);
                        renderTable();
                        toggleSaveButtonDisable();
                    },
                });
            });
        });

        function templatesViewMode() {
            templatesIsEditable = false;
            $('.middle-col').addClass('full-width');
            $('.fields-col').addClass('hide');
            $('.option-fields .open .template-view-container button.edit').removeClass('hide');
            $('.option-fields .open .template-view-container button.delete').addClass('hide');
            $('.option-fields .open .template-view-container .list-box').removeClass('delete-item');
        }

        $('button.delete').click(function() {
            if ($('.template-tab.active').hasClass('default')) {
                return;
            }

            templates.splice(activeTemplate, 1);
            $('.template-tab.default > a').click();
            renderTemplateTabs();
        });

        function toggleSaveButtonDisable() {
            if (JSON.stringify(templates) === JSON.stringify(prevTemplateState)) {
                $('td button.apply').addClass('disabled');
                return;
            }

            $('td button.apply').removeClass('disabled');
        }

        $('button.cancel').click(function (e) {
            templates = prevTemplateState;
            renderAvailableFields(templates[0].fields);
            renderTemplateTabs();
            templatesViewMode();
            renderTable();
            $('.template-tab.default > a').click();
        });

        $('button.apply').click(function (e) {
            templatesViewMode();
            renderTemplateTabs();
            $('.template-tab > a')[activeTemplate].click();
        });

        $('button.save').click(function (e) {
            $('button.save').hide();
            $('.save_search_textbox').show();
            $('.save_search_textbox').focus();
            $('.save-search').show();
            $('.save-search2').show();
        });

        $('.save_search_textbox').keydown(function(e) {
            e.stopPropagation();
            if (e.keyCode === 13) {
                $(".save-search").mousedown();
            }
        });

        $('.save_search_textbox').focusout(function(e) {
            $('.save-search2').click();
        });

        //$('.save-search').click(function(e) {
        $('.save-search').on('mousedown', function(e) {    
            var searchName = $('.save_search_textbox').val();
            var insertSavedSearch = `
                <li class=${colors[(colorCtr++)%colors.length]}>
                    <div class="top-controls">
                        <i class="fa fa-search"></i>
                        <i class="fa fa-trash"></i>
                    </div>
                    <h4>${searchName}</h4>
                    <p>Search term for PH Import Data generated 25,000 results.</p>
                    <i class="fa fa-calendar-o"></i><span>2017-06-08</span>
                </li>
            `;
            $('.saved-panel ul').prepend(insertSavedSearch);
            $('.save-search2').click();
        });

        $('.save-search2').click(function(e) {
            $('.save_search_textbox').val('');
            $('.save_search_textbox').hide();
            $('.save-search').hide();
            $('.save-search2').hide();
            $('button.save').show();            
        });    

        $('.section-nav-filter', this).on('click', '.fa.fa-trash', function(e) {
            $(this).closest("li").children().hide();
            var html = `
                <div class="deleteItem" hidden>
                    Delete?
                    <button type="button" class="btn btn-link delete-yes">Yes</button>
                    OR
                    <button type="button" class="btn btn-link delete-no">No</button>
                </div>
            `;
            $(this).closest("li").append(html);
            $(this).closest("li").find('.deleteItem').show();
        });

        $('.section-nav-filter', this).on('click', 'button.delete-yes', function(e) {
            $(this).closest("li").remove();
        });

        $('.section-nav-filter', this).on('click', 'button.delete-no', function(e) {
            $(this).closest("li").children().show();
            $(this).closest("li").find('.deleteItem').remove();
        });

        $('.section-nav-filter', this).on('click', '.fa.fa-search', function(e) {
            $('#searchBar').val($(this).closest("li").find("h4").html());
            $('.loader-container').show();
            setTimeout(function() {
                $('#showResultsFor').show();
                $('#showResultsFor').show();
                $('button#clearfilter').show();
                $('#moreFilters').show();
                $('button.btn.save').show();
                $('.loader-container').hide();
                $("a[data-tab|='new-tab']").click();
                addToHistory();                    
            }, 1000);

        });

        $('.new_template').click(function (e) {
            $('.new_template').hide();
            $('.cancel-new').addClass('visible');
            $('.new_template_textbox').show();
            $('.new_template_textbox').focus();
            $('.results-table').addClass('results-table-disabled');
        });

        $('.new_template_textbox').keydown(function (e) {
            if (e.keyCode === 13) {
                templates.push({
                    name: $('.new_template_textbox').val(),
                    fields: []
                });

                $('.new_template_textbox').val('');
                hideCancelNewTemplate();
                renderTemplateTabs();
                $('.template-tab a').last().click();
                $('button.edit').click();
            }
        });

        $("body").click(function(e) {
            if (e.target.id === "template-view-container" || $(e.target).parents("#template-view-container").length || $(e.target).hasClass('template-toggle')) {

            } else {
                if ($('#template-view-container').css('display') === 'block') {
                    hideCancelNewTemplate();
                    $('.template-toggle').click();
                }
            }
        });

        function hideCancelNewTemplate() {
            $('.new_template').show();
            $('.new_template_textbox').hide();
            $('.cancel-new').removeClass('visible');
            $('.results-table').removeClass('results-table-disabled');
        }
        $('.cancel-new').click(hideCancelNewTemplate);

        $('.options-button').click(function (e) {
            $('.fa-caret-up').toggleClass('visible');
            $('.other-options-icon').toggleClass('hide');
            $('.graph-details').toggleClass('visible');
        });

        $(document).on('mouseenter', '.p-desc', function (e) {
            $('a.a-desc').addClass('link-scaling');
        });

        $(document).on('mouseleave', '.p-desc', function (e) {
            $('a.a-desc').removeClass('link-scaling');
        });

        function renderTemplateTabs() {
            var template_tabs = '';
            var template_tab_containers = '';

            templates.forEach(function (t, index) {
                var fields = '';

                t.fields.forEach(function (f) {
                    fields += `
                        <div class="list-box"><i class="check-icon"></i><span>${f}</span></div>
                    `;
                });

                template_tabs += `
                    <li role="presentation" class="template-tab ${index === 0 ? 'active default' : ''}">
                        <a href="#template-${index}" data-index="${index}" aria-controls="template-${index}" role="tab" data-toggle="tab">
                            ${t.name}
                        </a>
                    </li>
                `;

                template_tab_containers += `
                    <div role="tabpanel" class="tab-pane ${index === 0 ? 'active' : ''}" id="template-${index}">
                        <h3>${t.name}</h3>
                        <div class="item-container">
                            ${fields}
                        </div>
                    </div>
                `;
            });

            $('.template-tab-list').html(template_tabs);
            $('.template-tab-container .tab-content').html(template_tab_containers);

            $('.template-tab a').click(function (e) {
                var templateIndex = $(e.target).data('index');
                activeTemplate = templateIndex;
                $('.template-toggle').html(
                    $('.template-toggle').html().replace(
                        $('.template-toggle')[0].innerText,
                        templates[templateIndex].name
                    )
                );
                $('button.delete').removeClass('disabled');
                if (!templateIndex) {
                    $('button.delete').addClass('disabled');
                }

                renderAvailableFields(templates[templateIndex].fields);

                if (templatesIsEditable && !templates[activeTemplate].fields.length) {
                    $($('.template-tab-container .tab-content .item-container').get(activeTemplate)).html(`<div class="empty-box">Click to select items on the right to create your custom template.</div>`);
                }
                else if (!templatesIsEditable && !templates[activeTemplate].fields.length) {
                    $($('.template-tab-container .tab-content .item-container').get(activeTemplate)).html(`<div class="empty-box">Click "<strong>Edit</strong>" button below to cutomize your tempplate.</div>`);
                }

                renderTable();
            });

            attachDeleteFieldEvent();
        };

        function attachDeleteFieldEvent() {
            $('.list-box > .check-icon').click(function(e) {
                if ($(e.target.parentNode).hasClass('delete-item')) {
                    if (activeTemplate === 0 && templates[activeTemplate].fields.length <= 3) {
                            return;
                    }

                    templates[activeTemplate].fields
                        .splice(
                            templates[activeTemplate].fields.indexOf(e.target.parentNode.innerText),
                            1
                        );

                    if (activeTemplate === 0 && templates[activeTemplate].fields.length <= 3) {
                        $('.template-tab-container  .tab-pane.active i').addClass('disabled');
                    }

                    $(e.target.parentNode).remove();
                    renderAvailableFields(templates[activeTemplate].fields);
                    renderTable();
                    toggleSaveButtonDisable();
                    e.stopPropagation();
                }
            });
        };

        renderTemplateTabs();

        function renderAvailableFields(takenFields) {
            var availableFields = '<h3>Click to Select</h3>';

            fields.forEach(function (f) {
                if (!~takenFields.indexOf(f)) {
                    availableFields += `
                        <button class="btn btn-default btn-small">${f}</button>
                    `;
                }
            });

            $('.available-fields-container').html(availableFields);

            $('.available-fields-container > .btn').click(function(e) {
                var content = $('.template-tab-container .tab-content .active .item-container').html();

                if (!templates[activeTemplate].fields.length) {
                    content = '';
                }

                templates[activeTemplate].fields.push(e.target.innerText);

                $('.template-tab-container .tab-content .active .item-container').html(
                    content + `
                    <div class="list-box delete-item">
                        <i class="check-icon"></i>
                        <span>${e.target.innerText}</span>
                    </div>
                `);

                attachDeleteFieldEvent();
                renderAvailableFields(templates[activeTemplate].fields);
                renderTable();
                toggleSaveButtonDisable();
                e.stopPropagation();
            });
        }

        renderAvailableFields(templates[0].fields);

        var tableDataArr = [tableData1, tableData2, tableData3,tableData4];
        var tableDataIndex = 0;
        var tableData = tableDataArr[tableDataIndex];
        var activePage = 1;
        
        function renderTable() {
            
            var t = templates[activeTemplate];

            if (!t.fields.length) {
                t = templates[0];
            }

            var thead = `
                <thead>
                <tr>
                    ${t.fields.map(f => `
                        <th>${f}</th>
                    `).join('')}
                </tr>
                </thead>
            `
            var tbody = `
                <tbody>
                    ${tableData.slice((activePage - 1) * 10, activePage * 10).map(data => `
                        <tr>
                            ${t.fields.map(field => {
                                var a = `${data[field]}`;
                                if (a === null)
                                    a = ' ';
                                switch (field) {
                                    case 'Product Description':
                                        a = `
                                            <a href="details.html" class="a-desc"><i class="fa fa-caret-up"></i><i class="fa fa-file-text-o"></i></a><p class="p-desc">${data[field]}</p>
                                        `;
                                        break;
                                    case 'Consignee':
                                        a = `
                                            <a href="#" class="a-consignee"><i class="fa fa-building-o"></i></a><a href="#" class="vm-icon"><i class="fa fa-caret-up"></i><i class="fa fa-share-alt"></i></a><p class="p-consignee">${data[field]}</p>
                                        `;
                                        break;
                                    case 'Shipper':
                                        a = `
                                            <a href="#" class="a-shipper><i class="fa fa-building-o"></i></a><a href="#" class="vm-icon"><i class="fa fa-caret-up"></i><i class="fa fa-share-alt"></i></a><p class="p-shipper">${data[field]}</p>
                                        `;
                                        break;
                                }

                                return `
                                    <td>
                                        ${a}
                                    </td>
                                `
                            }).join('')}
                        </tr>
                    `).join('')}
                </tbody>
            `;

            $('.results-table').html(thead + tbody);
        }

        $('input[name="daterange"]').on('apply.daterangepicker',function(ev, picker, evt) {
            var tableDataArr = [...tableData1, ...tableData2, ...tableData3, ...tableData4];
            var startDate = picker.startDate;
            var endDate = picker.endDate;

            tableData = tableDataArr.filter((data) => {
                var date = moment(data['Arrival Date'], "MM-DD-YYYY");
                    //console.log(date);
                if(startDate.unix() >= date.unix() && date.unix() <= endDate.unix()){
                    //console.log(startDate.unix(), date.unix(), endDate.unix())
                }
    
                return startDate.unix() <= date.unix() && date.unix() <= endDate.unix() && tableData;
            });

            var oneDay = 24*60*60; // hours*minutes*seconds*milliseconds
            var diffDays = Math.round(Math.abs((endDate.unix() - startDate.unix())/(oneDay)));
            
            console.log(tableDataArr.length)
            console.log(tableData.length)

//-------------------------Sync Data Chart with Date Range Picker-----------------------------


    if(diffDays <=7){
        var selectedRange = oneWeek;
    }
    else if(diffDays <= 14){
        var selectedRange = twoWeeks;
    }
    else if(diffDays <= 31){
        var selectedRange = oneMonth;
    }
    else if(diffDays <= 93){
        var selectedRange = threeMonths;
    }
    else if(diffDays <= 365){
        var selectedRange = oneYear;
    }
    else if(diffDays <= 1825){
        var selectedRange = fiveYears;
    }

    
        window.selected = ['imports', 'exports']
        window.chart.data.labels = selectedRange.map(t=> t.label);
        window.chart.data.datasets[0].label = 'Imports';
        window.chart.data.datasets[0].data = selectedRange.map(t=> t.imports);
        window.chart.data.datasets[1].label = 'Exports';
        window.chart.data.datasets[1].data = selectedRange.map(t=> t.exports);
        window.chart.data.datasets[1].hidden = false;
        window.chart.update();
   

//--------------------------------------------------------------------------------------------

            renderTable();
            renderCard();
        });


        $('li.page').click(function (e) {
            e.preventDefault()
            changePage(+e.target.innerText);
        });

        $('.page-next').click(function(e) {
            e.preventDefault();
            changePage(activePage + 1);
        });

        $('.page-prev').click(function(e) {
            e.preventDefault();
            changePage(activePage - 1);
        });

        function changePage(page) {
            var page = Math.floor((Math.random()* 2) + 1);
            console.log(page);
            if (page > 5 || page < 1) {
                return;
            }
            if (tableData.length > 0){
                page = 1;
            }
            
            console.log(tableData);

            $('.page.disabled').removeClass('disabled');
            $('.page.active').removeClass('active');
            $('.page[data-page="' + page + '"]').addClass('active');
            activePage = page;

            if (page === 1) {
                $('.page-prev').addClass('disabled');
            }

            if (page === 5) {
                $('.page-next').addClass('disabled');
            }

            renderTable();
        }

        renderTable();

        $('.control-checkbox input').change(function () {
            tableData = tableDataArr[tableDataIndex++ % 4];
            changePage(1);
            renderCard();
        })

        var cardPage = 1;
        function renderCard() {
            cardPage = 1;
            var card = `${tableData.slice(0, 10).map(data => `
                <div class="col-md-3">
                    <div class="card-table">
                        <div class="card-headbar">
                            <div class="row clear-collapse">
                                <div class="col-md-12">
                                    <i class="fa fa-calendar-check-o"></i>
                                    <span class="arrival-date">Arrival Date: ${data['Arrival Date']}</span>
                                </div>
                            </div>
                        </div>
                        <div class="card-main">
                            <div class="card-row">
                                <div class="item-description shipper">
                                    <div class="option-icon">
                                        <a href="#" class="fa fa-building-o"></a>
                                        <a href="#" class="fa fa-share-alt"></a>
                                    </div>
                                    <h3>Shipper</h3>
                                    <p>${data['Shipper']}</p>
                                </div>
                            </div>
                            <div class="card-row">
                                <div class="item-description consignee">
                                    <div class="option-icon">
                                        <a href="#" class="fa fa-building-o"></a>
                                        <a href="#" class="fa fa-share-alt"></a>
                                    </div>
                                    <h3>Consignee</h3>
                                    <p>${data['Consignee']}</p>
                                </div>
                            </div>
                            <div class="card-row">
                                <div class="item-description">
                                    <div class="option-icon">
                                        <a href="#" class="fa fa-building-o"></a>
                                        <a href="#" class="fa fa-share-alt"></a>
                                    </div>
                                    <h3>Gross Weight(Lb)</h3>
                                    <p>${data['Gross Weight(Lb)']}</p>
                                </div>
                            </div>
                            <div class="card-row">
                                <div class="item-description">
                                    <div class="option-icon">
                                        <a href="#" class="fa fa-building-o"></a>
                                        <a href="#" class="fa fa-share-alt"></a>
                                    </div>
                                    <h3>Product Description</h3>
                                    <p class="prod-desc">${data['Product Description']}</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="btn-link">Full Details</a>
                        </div>
                    </div>
                </div>
            `).join('')}`;

            $('#card').html(card);
        }

        function addCardPage(page) {
            var card = `${tableData.slice((page - 1) * 10, page * 10).map(data => `
                <div class="col-md-3">
                    <div class="card-table">
                        <div class="card-headbar">
                            <div class="row clear-collapse">
                                <div class="col-md-12">
                                    <i class="fa fa-calendar-check-o"></i>
                                    <span class="arrival-date">Arrival Date: ${data['Arrival Date']}</span>
                                </div>
                            </div>
                        </div>
                        <div class="card-main">
                            <div class="card-row">
                                <div class="item-description shipper">
                                    <div class="option-icon">
                                        <a href="#" class="fa fa-building-o"></a>
                                        <a href="#" class="fa fa-share-alt"></a>
                                    </div>
                                    <h3>Shipper</h3>
                                    <p>${data['Shipper']}</p>
                                </div>
                            </div>
                            <div class="card-row">
                                <div class="item-description consignee">
                                    <div class="option-icon">
                                        <a href="#" class="fa fa-building-o"></a>
                                        <a href="#" class="fa fa-share-alt"></a>
                                    </div>
                                    <h3>Consignee</h3>
                                    <p>${data['Consignee']}</p>
                                </div>
                            </div>
                            <div class="card-row">
                                <div class="item-description">
                                    <div class="option-icon">
                                        <a href="#" class="fa fa-building-o"></a>
                                        <a href="#" class="fa fa-share-alt"></a>
                                    </div>
                                    <h3>Gross Weight(Lb)</h3>
                                    <p>${data['Gross Weight(Lb)']}</p>
                                </div>
                            </div>
                            <div class="card-row">
                                <div class="item-description">
                                    <div class="option-icon">
                                        <a href="#" class="fa fa-building-o"></a>
                                        <a href="#" class="fa fa-share-alt"></a>
                                    </div>
                                    <h3>Product Description</h3>
                                    <p class="prod-desc">${data['Product Description']}</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="btn-link">Full Details</a>
                        </div>
                    </div>
                </div>
            `).join('')}`;

            $('#card').append(card);
        }

        renderCard();
    });

//--------------------------------------------------------------------------------------------------------------------

var graph = document.getElementById('lineChart').getContext('2d');

 var data = [
        { label: 'Jan 1-7', exports: 42, imports: 52, weight: 303, height: 305, quantity: 4750 },
        { label: 'Jan 8-14', exports: 65, imports: 36, weight: 298, height: 300, quantity: 2679 },
        { label: 'Jan 15-21', exports: 84, imports: 19, weight: 132, height: 150, quantity: 707 },
        { label: 'Jan 22-28', exports: 100, imports: 24, weight: 123, height: 142, quantity: 1010 },
        { label: 'Jan 29 - Feb 4', exports: 42, imports: 52, weight: 142, height: 194, quantity: 4329 },
        { label: 'Feb 5-11', exports: 65, imports: 36, weight: 324, height: 423, quantity: 5003 },
        { label: 'Feb 12-18', exports: 84, imports: 19, weight: 563, height: 654, quantity:  4313 },
        { label: 'Feb 19-25', exports: 100, imports: 24, weight: 432, height: 533, quantity: 5356 },
        { label: 'Feb 26 - Mar 4', exports: 42, imports: 52, weight: 423, height: 356, quantity: 6425 },
        { label: 'Mar 5-11', exports: 65, imports: 36, weight: 634, height: 234, quantity: 6357 },
        { label: 'Mar 12-18', exports: 84, imports: 19, weight: 747, height: 456, quantity: 8567 },
        { label: 'Mar 19-25', exports: 100, imports: 24, weight: 756, height: 342, quantity: 3757 },
    ];

 window.selected = ['imports', 'exports'];

 window.selected.ranges = [oneWeek, twoWeeks, oneMonth, threeMonths, oneYear, fiveYears];

 var line = {
     backgroundColor: 'transparent',
     sample: {test: 1, test2: 2},
     borderWidth: 1,
 };

 var imports = {
     label: 'Imports',
     data: data.map(t => t.imports),
 pointBackgroundColor: '#68d47b',
     pointBorderColor:'#ffffff',
     borderColor: '#68d47b',
 }

 var exports = {
     label: 'Exports',
     data: data.map(t => t.exports),
 pointBackgroundColor: '#2fadee',
     pointBorderColor:'#ffffff',
     borderColor: '#2fadee',
 }

 imports = Object.assign({}, imports, line);
 exports = Object.assign({}, exports, line);

 var datasets = [
     imports,
     exports
 ];

 var chartSettings = {
     type: 'line',
     data: {
         labels: data.map(t => t.label),
 datasets: datasets,
 },
 options: {
     tooltips: {
         mode: 'index',
             position: 'nearest',
             backgroundColor: 'white',
             borderColor: 'rgba(0,0,0,0.2)',
             borderWidth: 1,
             titleFontColor: 'rgba(0,0,0,0.6)',
             bodyFontColor: 'rgba(0,0,0,0.6)',
     },
     animation: {
         duration: 500,
     },
     legend: {
         display: false,
     },
     elements: {
         point: {
             radius: 4,
         },
         line: {
             tension: 0,
         },
     },
     maintainAspectRatio: false,
         scales: {
         xAxes: [
             {
                 gridLines: {
                     display: false,
                     drawBorder: false,
                     tickMarkLength:20,
                 },

                 ticks: {
                     fontSize: 11,
                     fontColor: 'rgba(52, 64, 80, 0.7)',
                 },
             },
         ],
             yAxes: [
             {
                 gridLines: {
                     color: 'rgba(0,0,0,0.05)',
                     drawBorder: false,
                     zeroLineColor: 'rgba(0,0,0,0.05)',
                 },
                 ticks: {
                     suggestedMin: 0,
                     fontSize: 10,
                     fontColor: 'rgba(52, 64, 80, 0.4)',
                     maxTicksLimit: 3,
                 },
             },
         ],
     },
 },
 };

  window.chart = new Chart(graph, chartSettings);

 // Tabs Active and being used



 function dataChart(evt) {

$('.control-checkbox input').change(function () {
        var tableDataArr = [tableData1, tableData2, tableData3, tableData4];
        var tableDataIndex = 0;
            tableData = tableDataArr[tableDataIndex++ % 4];

            changePage(1);
            renderCard();
        })

//Start of Chart of Shipments
    
    var selectIndex = $('.rangeTab.active').data('range');

    if(selectIndex === 1){
        var selectedRange = oneWeek;
    }
    else if(selectIndex === 2){
        var selectedRange = twoWeeks;
    }
    else if(selectIndex === 3){
        var selectedRange = oneMonth;
    }
    else if(selectIndex === 4){
        var selectedRange = threeMonths;
    }
    else if(selectIndex === 5){
        var selectedRange = oneYear;
    }
    else if(selectIndex === 6){
        var selectedRange = fiveYears;
    }

    var dataIndex = $(evt.target).data('tab') || $(evt.target.parentNode).data('tab');

    if(dataIndex === 1){
        window.selected = ['imports', 'exports']
        window.chart.data.labels = selectedRange.map(t=> t.label);
        window.chart.data.datasets[0].label = 'Imports';
        window.chart.data.datasets[0].data = selectedRange.map(t=> t.imports);
        window.chart.data.datasets[1].label = 'Exports';
        window.chart.data.datasets[1].data = selectedRange.map(t=> t.exports);
        window.chart.data.datasets[1].hidden = false;
        window.chart.update();
    }
//---------------------------------------------------------

//Shipment Weight

    else if(dataIndex === 2){
        window.selected = ['weight', 'height']
        window.chart.data.labels = selectedRange.map(t=> t.label);
        window.chart.data.datasets[0].label = 'Weight';
        window.chart.data.datasets[0].data = selectedRange.map(t=> t.weight);
        window.chart.data.datasets[1].label = 'height';
        window.chart.data.datasets[1].data = selectedRange.map(t=> t.height);
        window.chart.data.datasets[1].hidden = false;
        window.chart.update();
    }

//Shipment Quantity Chart

    else if(dataIndex === 3){
        window.selected = ['quantity']
        window.chart.data.labels = selectedRange.map(t=> t.label);
        window.chart.data.datasets[0].label = 'Quantity';
        window.chart.data.datasets[0].data = selectedRange.map(t=> t.quantity);
        window.chart.data.datasets[1].hidden = true;
        window.chart.update();
    }

    //Solution for the event target issue
    $('.chartTab').removeClass('active');

    if ($(evt.target).hasClass('chartTab')) {
        $(evt.target).addClass('active');
    }
    else {
        $(evt.target).parents('.chartTab').addClass('active');
    }
    $('.control-checkbox input').change();

}

//-------------------------------------------End of Tab charts -------------------------------------

$('.chartTab').click(dataChart);

//-----------------------------------------------DATE RANGE ----------------------------------------

function dateRanges(evt){

    var rangeIndex = $(evt.target).data('range');
    var selected = window.selected;

    $('.control-checkbox input').change(function () {
        var tableDataArr = [tableData1, tableData2, tableData3, tableData4];
        var tableDataIndex = 0;
            tableData = tableDataArr[tableDataIndex++ % 4];
        var randPage = Math.floor((Math.random()* 2) + 1);
            changePage(randPage);
            renderCard();
        })

    // console.log(selected);

    if(rangeIndex === 1){
        window.selected.ranges = [oneWeek, twoWeeks, oneMonth, threeMonths, oneYear, fiveYears];
        window.chart.data.labels = oneWeek.map(t=> t.label);
        window.chart.data.datasets[0].label = window.selected[0];
        window.chart.data.datasets[0].data = oneWeek.map(t=> t[selected[0]]);
        window.chart.data.datasets[1].label = window.selected[1];
        window.chart.data.datasets[1].data = oneWeek.map(t=> t[selected[1]]);
        window.chart.update();
    }

    if(rangeIndex === 2){
        window.selected.ranges = [oneWeek, twoWeeks, oneMonth, threeMonths, oneYear, fiveYears];
        window.chart.data.labels = twoWeeks.map(t=> t.label);
        window.chart.data.datasets[0].label = window.selected[0];
        window.chart.data.datasets[0].data = twoWeeks.map(t=> t[selected[0]]);
        window.chart.data.datasets[1].label = window.selected[1];
        window.chart.data.datasets[1].data = twoWeeks.map(t=> t[selected[1]]);
        window.chart.update();
    }

    if(rangeIndex === 3){
        window.selected.ranges = [oneWeek, twoWeeks, oneMonth, threeMonths, oneYear, fiveYears];
        window.chart.data.labels = oneMonth.map(t=> t.label);
        window.chart.data.datasets[0].label = window.selected[0];
        window.chart.data.datasets[0].data = oneMonth.map(t=> t[selected[0]]);
        window.chart.data.datasets[1].label = window.selected[1];
        window.chart.data.datasets[1].data = oneMonth.map(t=> t[selected[1]]);
        window.chart.update();

    }

    if(rangeIndex === 4){
        window.selected.ranges = [oneWeek, twoWeeks, oneMonth, threeMonths, oneYear, fiveYears];
        window.chart.data.labels = threeMonths.map(t=> t.label);
        window.chart.data.datasets[0].label = window.selected[0];
        window.chart.data.datasets[0].data = threeMonths.map(t=> t[selected[0]]);
        window.chart.data.datasets[1].label = window.selected[1];
        window.chart.data.datasets[1].data = threeMonths.map(t=> t[selected[1]]);
        window.chart.update();

    }

    if(rangeIndex === 5){
        window.selected.ranges = [oneWeek, twoWeeks, oneMonth, threeMonths, oneYear, fiveYears];;
        window.chart.data.labels = oneYear.map(t=> t.label);
        window.chart.data.datasets[0].label = window.selected[0];
        window.chart.data.datasets[0].data = oneYear.map(t=> t[selected[0]]);
        window.chart.data.datasets[1].label = window.selected[1];
        window.chart.data.datasets[1].data = oneYear.map(t=> t[selected[1]]);
        window.chart.update();

    }

    if(rangeIndex === 6){
        window.selected.ranges = [oneWeek, twoWeeks, oneMonth, threeMonths, oneYear, fiveYears];
        window.chart.data.labels = fiveYears.map(t=> t.label);
        window.chart.data.datasets[0].label = window.selected[0];
        window.chart.data.datasets[0].data = fiveYears.map(t=> t[selected[0]]);
        window.chart.data.datasets[1].label = window.selected[0];
        window.chart.data.datasets[1].data = fiveYears.map(t=> t[selected[1]]);
        window.chart.update();

    }

    $('.rangeTab').removeClass('active');
    $(evt.target).addClass('active');

//--------------------------------
    $('.control-checkbox input').change()

 }

$('.rangeTab').click(dateRanges);

//--------------------------------End of Date Range Codes----------------------------------

//-----------------------------Import/Export list Combo box--------------------------------

    function importExportComboBox(evt){
        var dropDown = $(evt.target).data('dropdown');
        var selected = window.selected;
        console.log(dropDown);


    if(dropDown === 1){
    $('.control-checkbox input').change(function () {
        var tableDataArr = [tableData1, tableData2, tableData3, tableData4];
        var tableDataIndex = 0;
            tableData = tableDataArr[tableDataIndex++ % 4];
        var randPage = Math.floor((Math.random()* 2) + 1);
            changePage(randPage);
            renderCard();
        })

        $('.control-checkbox input').change()

    }


    if(dropDown === 2){
    $('.control-checkbox input').change(function () {
        var tableDataArr = [tableData1, tableData2, tableData3, tableData4];
        var tableDataIndex = 0;
            tableData = tableDataArr[tableDataIndex++ % 4];
        var randPage = Math.floor((Math.random()* 2) + 1);
            changePage(randPage);
            renderCard();
        })

        $('.control-checkbox input').change()

    }


    }


//--------------------------------------------------------------------------------


/*Current Task:
    - Reference errors of the functions called inside on another function where there is
      the synced daterange + chartdata and tabledata combo. *Optional - Need to change the listener
    - If the daterangepicker calendar Apply button is clicked, the tabledata 
      and chartdata will change. *Done with optional Errors - Need to change the listener.
    - If Daterangepicker dates is set, the dates on table data will be filtered. *Done - Minor changes
-Ongoing-    
    - When changing the Import/Export Combo box, the tableData will change. *Ongoing
    - If Daterangepicker dates is set, the dates on charts will also change. *Simultaneous
    
*/
