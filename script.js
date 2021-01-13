
window.onload = function() {
    if (window.jQuery) {
        console.log("Jquery is working properly.");
    } else {
        alert("SysCheck Alert: jQuery not detected/not working.");
    }

    var global_isOptionsAdded; 
    var global_balance;
    var total_processorNames = 0;
    var total_graphicCardNames = 0;
    var total_ramNames = 0;
    var total_storageNames = 0;

    const components = { // add data about PC components here. follow pattern of setting properties.

        processor: {    
            Pentium_G5400: {
                name: 'Intel Pentium G5400 3.7 GHz | 2 Cores | 4 Threads | P2800',
                brand: 'intel',
                price: 2800,
                link: 'http://pcgilmore.com.ph/index.php?route=product/product&path=29&product_id=689&sort=p.price&order=ASC',
                value: 1
            },

            i3_9100F: {
                name: 'Intel Core i3-9100F 3.60 GHz | 4 Cores | 4 Threads | P3930',
                brand: 'intel',
                price: 3930,
                link: 'http://pcgilmore.com.ph/index.php?route=product/product&path=29&product_id=690&sort=p.price&order=ASC',
                value: 2
            },

            Ryzen_3_2200: {
                name: 'AMD Ryzen 3 2200G 3.5 GHz | 4 Cores | P5100',
                brand: 'amd',
                price: 5100,
                link: 'http://pcgilmore.com.ph/index.php?route=product/product&path=29&product_id=67&sort=p.price&order=ASC',
                value: 3
            },

            Ryzen_3_3100: {
                name: 'AMD Ryzen 3 3100 3.6 GHz | 4 Cores | 8 Threads | P5750',
                brand: 'amd',
                price: 5750,
                link: 'http://pcgilmore.com.ph/index.php?route=product/product&path=29&product_id=677&sort=p.price&order=ASC',
                value: 4
            },

            Ryzen_3_3200: { 
                name: 'AMD Ryzen™ 3 3200G with Radeon™ Vega 8 Graphics | 4 Cores | 8 Threads | P5950',
                brand: 'amd',
                price: 5950,
                link: 'http://pcgilmore.com.ph/index.php?route=product/product&path=29&product_id=678&sort=p.price&order=ASC',
                value: 5
            }   
        },

        graphicsCard: {
            MSI_GT_1030: {
                name: 'MSI GT 1030 | 2GB DDR4 | Overclocked | P3900',
                brand: 'msi',
                inventor: 'nvidia',
                price: 3900,
                link: 'http://pcgilmore.com.ph/index.php?route=product/product&path=65&product_id=156&sort=p.price&order=ASC',
                value: 1
            },

            GTX_1050Ti: {
                name: 'MSI GTX 1050Ti | 4GB GDDR5 | Overclocked | P7300',
                brand: 'msi', 
                inventor: 'nvidia',
                price: 7300,
                link: 'http://pcgilmore.com.ph/index.php?route=product/product&path=65&product_id=602&sort=p.price&order=ASC',
                value: 2
            },

            RX_560: {
                name: 'MSI RX 560 | 4GB GDDR5 | Overclocked | P8100',
                brand: 'msi',
                inventor: 'amd',
                price: 8100,
                link: 'http://pcgilmore.com.ph/index.php?route=product/product&path=65&product_id=191&sort=p.price&order=ASC',
                value: 3
            },

            ASUS_GTX_1050Ti: {
                name: 'ASUS PHOENIX GTX 1050Ti | 4GB GDDR5 | Non-Overclocked | P8990',
                brand: 'asus',
                inventor: 'amd',
                price: 8990,
                link: 'http://pcgilmore.com.ph/index.php?route=product/product&path=65&product_id=196&sort=p.price&order=ASC',
                value: 4
            },

            GTX_1050: {
                name: 'ASUS GTX 1050 | 2GB GDDR5 | Non-Overclocked | P7900',
                brand: 'asus',
                inventor: 'nvidia',
                price: 7900,
                link: 'http://pcgilmore.com.ph/index.php?route=product/product&path=65&product_id=195&sort=p.price&order=ASC',
                value: 5
            },

            ZOTAC_GTX_1050: {   
                name: 'ZOTAC GTX 1050 | 2GB GDDR5 | Overclocked | P8300',
                brand: 'zotac',
                inventor: 'nvidia',
                price: 8300,
                link: 'http://pcgilmore.com.ph/index.php?route=product/product&path=65&product_id=235&sort=p.price&order=ASC',
                value: 6
            }
        },

        RAM: {
            K_4GB_DDR4: {
                name: 'Kingston 4GB | DDR4 | 2666MHz | P1140',
                brand: 'Kingston',
                price: 1140,
                link: 'http://pcgilmore.com.ph/index.php?route=product/product&path=64&product_id=705&sort=p.price&order=ASC',
                value: 1
            },

            K_4GB_DDR3: {
                name: 'Kingston 4GB | DDR3 | 1600 MHz | P1150',
                brand: 'Kingston',
                price: 1150,
                link: 'http://pcgilmore.com.ph/index.php?route=product/product&path=64&product_id=345&sort=p.price&order=ASC',
                value: 2
            },

            K_8GB_DDR4: {
                name: 'Kingston 8GB | DDR4 | 2666 MHz | P1740',
                brand: 'Kingston',
                price: 1740,
                link: 'http://pcgilmore.com.ph/index.php?route=product/product&path=64&product_id=706&sort=p.price&order=ASC',
                value: 3
            },

            K_16GB_DDR4: {
                name: 'Kingston 16GB | DDR4 | 2666 MHz | P3100',
                brand: 'Kingston',
                price : 3100,
                link: 'http://pcgilmore.com.ph/index.php?route=product/product&path=64&product_id=710&sort=p.price&order=ASC',
                value: 4
            }   
        },

        StorageDrive: {
                Seagate_500GB: {
                    name: 'Seagate 500GB | 7200 RPM | HDD | P2150',
                    brand: 'Seagate',
                    price: 2150,
                    link: 'http://pcgilmore.com.ph/index.php?route=product/product&product_id=100&tag=hard+disk+drive',
                    value: 1
                },

                WD_500GB: {
                    name: 'Western Digital Blue 500GB | 7200 RPM | HDD | P2350',
                    brand: 'Western Digital',
                    price: 2350,
                    link: 'http://pcgilmore.com.ph/index.php?route=product/product&product_id=108&tag=hard+disk+drive&sort=p.price&order=ASC',
                    value: 2
                },

                WD_1TB: {
                    name: 'Western Digital Blue 1TB | 7200 RPM | HDD | P2600',
                    brand: 'Western Digital',
                    price: 2600,
                    link: 'http://pcgilmore.com.ph/index.php?route=product/product&product_id=109&tag=hard+disk+drive&sort=p.price&order=ASC',
                    value: 3
                },

                WD_2TB: {
                    name: 'Western Digital Blue 2TB | 7200 RPM | HDD | P3850',
                    brand: 'Western Digital',
                    price: 3850,
                    link: 'http://pcgilmore.com.ph/index.php?route=product/product&product_id=110&tag=hard+disk+drive&sort=p.price&order=ASC',
                    value: 4 
                },

                WD_4TB: {
                    name: "Western Digital Blue 4TB | 7200 RPM | HDD | P6750",
                    brand: 'Western Digital',
                    price: 6750,
                    link: 'http://pcgilmore.com.ph/index.php?route=product/product&product_id=111&tag=hard+disk+drive&sort=p.price&order=ASC',
                    value: 5
                }

        }
    }

    $(".grid_Item").addClass("ContentHidden");
    

    $("#enterBTN").click(function() {
        console.log("Button was clicked.");
        console.log($(".moneyInput").text());
        // debug; check if it prints to the console for verification

        let inputValue = parseInt($(".moneyInput").text(), 10);
        console.log(inputValue);
        console.log("Input Data Type: " + typeof inputValue);

        if (isNaN(inputValue)) {
            $("#errorMsg").text("Please type a whole number");
            $(".grid_Money").css({"border": "4px red solid"});
        } else if (inputValue < 10000) {
            $("#errorMsg").text("Value has to be > 10000.");
            $(".grid_Money").css({"border": "4px red solid"});
        } else {
            $("#errorMsg").text("Operation successful.");
            global_balance = inputValue;
            inputValid();
            console.log(`Balance: ${inputValue}, global variable`);
            $("#number_Money").text(`${inputValue}`);
            $("#budgetContent").html(`- Current Budget - <br> If you see Red budget, it means that your current choices combined exceeds your current budget. <br> If that's the case, please re-evaluate your choices. Thank you.`);
            loadOptionItems();
        }
    });

    $("#debugBTN").click(function() {
        testAddOption()
    });

    var processorChoicePrice = 0;
    var graphicsChoicePrice = 0;
    var ramChoicePrice = 0;
    var storageChoicePrice = 0;
    var sum = 0;

    // 4 global scope variables are placed here for me to see them quickly

    $("#Processor").change(function() {
             for (model in components.processor) {
                 let value = components.processor[model].value;
                 if (value == $(this).val()) {
                     let processorPrice = components.processor[model].price;
                     console.log(`Log: processorPrice: ${processorPrice}`);
                     $("#processorPrice").text(`Price: ${processorPrice}`);
                     processorChoicePrice = processorPrice;
                     combinedChoiceValidity();
                     $("#cpuModel").text(`${components.processor[model].name}`);
                     break;
                 } 
             }
        });

    $("#Graphics_Card").change(function() {
        for (model in components.graphicsCard) {
            let value = components.graphicsCard[model].value;
            if (value == $(this).val()) {
                let graphicsPrice = components.graphicsCard[model].price;
                console.log(`Log: graphicsPrice: ${graphicsPrice}`);
                $("#graphicsPrice").text(`Price: ${graphicsPrice}`);
                graphicsChoicePrice = graphicsPrice;
                combinedChoiceValidity();
                $("#gpuModel").text(`${components.graphicsCard[model].name}`);
                break;
            } 
        }
    });

    $("#RAM_Memory").change(function() {
        for (model in components.RAM) {
            let value = components.RAM[model].value;
            if (value == $(this).val()) {
                let ramPrice = components.RAM[model].price;
                console.log(`Log: RAMPrice: ${ramPrice}`);
                $("#ramPrice").text(`Price: ${ramPrice}`);
                ramChoicePrice = ramPrice;
                combinedChoiceValidity();
                $("#ramModel").text(`${components.RAM[model].name}`);
                break;
            } 
        }
    });

    $("#Storage_Drive").change(function() {
        for (model in components.StorageDrive) {
            let value = components.StorageDrive[model].value;
            if (value == $(this).val()) {
                let storagePrice = components.StorageDrive[model].price;
                console.log(`Log: graphicsPrice: ${storagePrice}`);
                $("#storagePrice").text(`Price: ${storagePrice}`);
                storageChoicePrice = storagePrice;
                combinedChoiceValidity();
                $("#storageModel").text(`${components.StorageDrive[model].name}`);
                break;
            } 
        }

    });

    function combinedChoiceValidity() { 
        // check if all price choices exceed the current budget
        /*
        colors certain elements as a visual warning to user.
        */
        console.log(global_balance);
        sum = processorChoicePrice + graphicsChoicePrice + ramChoicePrice + storageChoicePrice;
        console.log(sum);
        if (sum > global_balance) {
            $("#currencySign, #number_Money, #budgetContent, .price").css({"color": "red"});
            $("#cpuModel, #cpuModelPrice, #gpuModel, #gpuModelPrice, #ramModel, #ramModelPrice, #storageModel, #storageModelPrice, #priceTotal").css({"color": "red"});
            $("#priceTotal").text(sum);
        } else {
            $("#currencySign, #number_Money, #budgetContent, .price").css({"color": "black"});
            $("#priceTotal").text(sum);
        }
    }

    function inputValid() {
        $(".grid_Item").removeClass("ContentHidden").addClass("ContentVisible");
        /*
        I used an alternative to showing elements as opposed to show()
        since I wanted an animation on the grid container
        */
        $(".grid_Money").css({"border": "2px blue solid"});
    }

    function loadOptionItems() {
        if (!global_isOptionsAdded) { // check if options were already added. avoids duplication
            global_isOptionsAdded = true;
            let procAttrVal = 0;
            let graphicAttrVal = 0;
            let ramAttrVal = 0;
            let storageAttrVal = 0;

               // processor, add options to drop-down from components object
            for (let model in components.processor) {
                ++procAttrVal;
                ++total_processorNames;
                // console.log(`${model}: Price is ${components.processor[model].price}`);
                $("select#Processor").append(`<option value="${procAttrVal}" id="${procAttrVal}"> ${components.processor[model].name} </option>`);
            }

                // graphics card, add options to drop-down from components object
            for (let model in components.graphicsCard) {
                ++total_graphicCardNames
                ++graphicAttrVal;
                $("select#Graphics_Card").append(`<option value="${graphicAttrVal}" id="${graphicAttrVal}"> ${components.graphicsCard[model].name} </option>`);
            }

                // RAM, add options to drop-down from components object
            for (let model in components.RAM) {
                ++total_ramNames
                ++ramAttrVal;
                $("select#RAM_Memory").append(`<option value="${ramAttrVal}" id="${ramAttrVal}"> ${components.RAM[model].name} </option>`);
            }

                // Storage, add options to drop-down from components object
            for (let model in components.StorageDrive) {
                ++total_storageNames;
                ++storageAttrVal;
                $("select#Storage_Drive").append(`<option value="${storageAttrVal}" id="${storageAttrVal}"> ${components.StorageDrive[model].name} </option>`);
            }
        }
    }

    

    function testAddOption() {
        console.log("called function debug");
        $("select#Processor").append(`<option value="test"> Test </option>`);
    }
  

}