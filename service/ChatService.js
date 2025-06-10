'use strict';


/**
 * **Starting a new project?** We recommend trying [Responses](/docs/api-reference/responses)  to take advantage of the latest OpenAI platform features. Compare [Chat Completions with Responses](/docs/guides/responses-vs-chat-completions?api-mode=responses).  ---  Creates a model response for the given chat conversation. Learn more in the [text generation](/docs/guides/text-generation), [vision](/docs/guides/vision), and [audio](/docs/guides/audio) guides.  Parameter support can differ depending on the model used to generate the response, particularly for newer reasoning models. Parameters that are only supported for reasoning models are noted below. For the current state of  unsupported parameters in reasoning models,  [refer to the reasoning guide](/docs/guides/reasoning). 
 *
 * body CreateChatCompletionRequest 
 * returns CreateChatCompletionResponse
 **/
exports.createChatCompletion = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "created" : 3,
  "usage" : {
    "completion_tokens" : 2,
    "prompt_tokens" : 4,
    "completion_tokens_details" : {
      "accepted_prediction_tokens" : 1,
      "audio_tokens" : 1,
      "reasoning_tokens" : 1,
      "rejected_prediction_tokens" : 6
    },
    "prompt_tokens_details" : {
      "audio_tokens" : 7,
      "cached_tokens" : 1
    },
    "total_tokens" : 7
  },
  "model" : "model",
  "service_tier" : "auto",
  "id" : "id",
  "choices" : [ {
    "finish_reason" : "stop",
    "index" : 0,
    "message" : {
      "role" : "assistant",
      "function_call" : {
        "name" : "name",
        "arguments" : "arguments"
      },
      "refusal" : "refusal",
      "annotations" : [ {
        "type" : "url_citation",
        "url_citation" : {
          "start_index" : 1,
          "end_index" : 6,
          "title" : "title",
          "url" : "url"
        }
      }, {
        "type" : "url_citation",
        "url_citation" : {
          "start_index" : 1,
          "end_index" : 6,
          "title" : "title",
          "url" : "url"
        }
      } ],
      "tool_calls" : [ {
        "function" : {
          "name" : "name",
          "arguments" : "arguments"
        },
        "id" : "id",
        "type" : "function"
      }, {
        "function" : {
          "name" : "name",
          "arguments" : "arguments"
        },
        "id" : "id",
        "type" : "function"
      } ],
      "audio" : {
        "expires_at" : 5,
        "transcript" : "transcript",
        "data" : "data",
        "id" : "id"
      },
      "content" : "content"
    },
    "logprobs" : {
      "refusal" : [ null, null ],
      "content" : [ {
        "top_logprobs" : [ {
          "logprob" : 7.061401241503109,
          "bytes" : [ 9, 9 ],
          "token" : "token"
        }, {
          "logprob" : 7.061401241503109,
          "bytes" : [ 9, 9 ],
          "token" : "token"
        } ],
        "logprob" : 5.637376656633329,
        "bytes" : [ 2, 2 ],
        "token" : "token"
      }, {
        "top_logprobs" : [ {
          "logprob" : 7.061401241503109,
          "bytes" : [ 9, 9 ],
          "token" : "token"
        }, {
          "logprob" : 7.061401241503109,
          "bytes" : [ 9, 9 ],
          "token" : "token"
        } ],
        "logprob" : 5.637376656633329,
        "bytes" : [ 2, 2 ],
        "token" : "token"
      } ]
    }
  }, {
    "finish_reason" : "stop",
    "index" : 0,
    "message" : {
      "role" : "assistant",
      "function_call" : {
        "name" : "name",
        "arguments" : "arguments"
      },
      "refusal" : "refusal",
      "annotations" : [ {
        "type" : "url_citation",
        "url_citation" : {
          "start_index" : 1,
          "end_index" : 6,
          "title" : "title",
          "url" : "url"
        }
      }, {
        "type" : "url_citation",
        "url_citation" : {
          "start_index" : 1,
          "end_index" : 6,
          "title" : "title",
          "url" : "url"
        }
      } ],
      "tool_calls" : [ {
        "function" : {
          "name" : "name",
          "arguments" : "arguments"
        },
        "id" : "id",
        "type" : "function"
      }, {
        "function" : {
          "name" : "name",
          "arguments" : "arguments"
        },
        "id" : "id",
        "type" : "function"
      } ],
      "audio" : {
        "expires_at" : 5,
        "transcript" : "transcript",
        "data" : "data",
        "id" : "id"
      },
      "content" : "content"
    },
    "logprobs" : {
      "refusal" : [ null, null ],
      "content" : [ {
        "top_logprobs" : [ {
          "logprob" : 7.061401241503109,
          "bytes" : [ 9, 9 ],
          "token" : "token"
        }, {
          "logprob" : 7.061401241503109,
          "bytes" : [ 9, 9 ],
          "token" : "token"
        } ],
        "logprob" : 5.637376656633329,
        "bytes" : [ 2, 2 ],
        "token" : "token"
      }, {
        "top_logprobs" : [ {
          "logprob" : 7.061401241503109,
          "bytes" : [ 9, 9 ],
          "token" : "token"
        }, {
          "logprob" : 7.061401241503109,
          "bytes" : [ 9, 9 ],
          "token" : "token"
        } ],
        "logprob" : 5.637376656633329,
        "bytes" : [ 2, 2 ],
        "token" : "token"
      } ]
    }
  } ],
  "system_fingerprint" : "system_fingerprint",
  "object" : "chat.completion"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List stored Chat Completions. Only Chat Completions that have been stored with the `store` parameter set to `true` will be returned. 
 *
 * model String The model used to generate the Chat Completions. (optional)
 * metadata Metadata A list of metadata keys to filter the Chat Completions by. Example:  `metadata[key1]=value1&metadata[key2]=value2`  (optional)
 * after String Identifier for the last chat completion from the previous pagination request. (optional)
 * limit Integer Number of Chat Completions to retrieve. (optional)
 * order String Sort order for Chat Completions by timestamp. Use `asc` for ascending order or `desc` for descending order. Defaults to `asc`. (optional)
 * returns ChatCompletionList
 **/
exports.listChatCompletions = function(model,metadata,after,limit,order) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "first_id" : "first_id",
  "data" : [ {
    "created" : 3,
    "usage" : {
      "completion_tokens" : 2,
      "prompt_tokens" : 4,
      "completion_tokens_details" : {
        "accepted_prediction_tokens" : 1,
        "audio_tokens" : 1,
        "reasoning_tokens" : 1,
        "rejected_prediction_tokens" : 6
      },
      "prompt_tokens_details" : {
        "audio_tokens" : 7,
        "cached_tokens" : 1
      },
      "total_tokens" : 7
    },
    "model" : "model",
    "service_tier" : "auto",
    "id" : "id",
    "choices" : [ {
      "finish_reason" : "stop",
      "index" : 0,
      "message" : {
        "role" : "assistant",
        "function_call" : {
          "name" : "name",
          "arguments" : "arguments"
        },
        "refusal" : "refusal",
        "annotations" : [ {
          "type" : "url_citation",
          "url_citation" : {
            "start_index" : 1,
            "end_index" : 6,
            "title" : "title",
            "url" : "url"
          }
        }, {
          "type" : "url_citation",
          "url_citation" : {
            "start_index" : 1,
            "end_index" : 6,
            "title" : "title",
            "url" : "url"
          }
        } ],
        "tool_calls" : [ {
          "function" : {
            "name" : "name",
            "arguments" : "arguments"
          },
          "id" : "id",
          "type" : "function"
        }, {
          "function" : {
            "name" : "name",
            "arguments" : "arguments"
          },
          "id" : "id",
          "type" : "function"
        } ],
        "audio" : {
          "expires_at" : 5,
          "transcript" : "transcript",
          "data" : "data",
          "id" : "id"
        },
        "content" : "content"
      },
      "logprobs" : {
        "refusal" : [ null, null ],
        "content" : [ {
          "top_logprobs" : [ {
            "logprob" : 7.061401241503109,
            "bytes" : [ 9, 9 ],
            "token" : "token"
          }, {
            "logprob" : 7.061401241503109,
            "bytes" : [ 9, 9 ],
            "token" : "token"
          } ],
          "logprob" : 5.637376656633329,
          "bytes" : [ 2, 2 ],
          "token" : "token"
        }, {
          "top_logprobs" : [ {
            "logprob" : 7.061401241503109,
            "bytes" : [ 9, 9 ],
            "token" : "token"
          }, {
            "logprob" : 7.061401241503109,
            "bytes" : [ 9, 9 ],
            "token" : "token"
          } ],
          "logprob" : 5.637376656633329,
          "bytes" : [ 2, 2 ],
          "token" : "token"
        } ]
      }
    }, {
      "finish_reason" : "stop",
      "index" : 0,
      "message" : {
        "role" : "assistant",
        "function_call" : {
          "name" : "name",
          "arguments" : "arguments"
        },
        "refusal" : "refusal",
        "annotations" : [ {
          "type" : "url_citation",
          "url_citation" : {
            "start_index" : 1,
            "end_index" : 6,
            "title" : "title",
            "url" : "url"
          }
        }, {
          "type" : "url_citation",
          "url_citation" : {
            "start_index" : 1,
            "end_index" : 6,
            "title" : "title",
            "url" : "url"
          }
        } ],
        "tool_calls" : [ {
          "function" : {
            "name" : "name",
            "arguments" : "arguments"
          },
          "id" : "id",
          "type" : "function"
        }, {
          "function" : {
            "name" : "name",
            "arguments" : "arguments"
          },
          "id" : "id",
          "type" : "function"
        } ],
        "audio" : {
          "expires_at" : 5,
          "transcript" : "transcript",
          "data" : "data",
          "id" : "id"
        },
        "content" : "content"
      },
      "logprobs" : {
        "refusal" : [ null, null ],
        "content" : [ {
          "top_logprobs" : [ {
            "logprob" : 7.061401241503109,
            "bytes" : [ 9, 9 ],
            "token" : "token"
          }, {
            "logprob" : 7.061401241503109,
            "bytes" : [ 9, 9 ],
            "token" : "token"
          } ],
          "logprob" : 5.637376656633329,
          "bytes" : [ 2, 2 ],
          "token" : "token"
        }, {
          "top_logprobs" : [ {
            "logprob" : 7.061401241503109,
            "bytes" : [ 9, 9 ],
            "token" : "token"
          }, {
            "logprob" : 7.061401241503109,
            "bytes" : [ 9, 9 ],
            "token" : "token"
          } ],
          "logprob" : 5.637376656633329,
          "bytes" : [ 2, 2 ],
          "token" : "token"
        } ]
      }
    } ],
    "system_fingerprint" : "system_fingerprint",
    "object" : "chat.completion"
  }, {
    "created" : 3,
    "usage" : {
      "completion_tokens" : 2,
      "prompt_tokens" : 4,
      "completion_tokens_details" : {
        "accepted_prediction_tokens" : 1,
        "audio_tokens" : 1,
        "reasoning_tokens" : 1,
        "rejected_prediction_tokens" : 6
      },
      "prompt_tokens_details" : {
        "audio_tokens" : 7,
        "cached_tokens" : 1
      },
      "total_tokens" : 7
    },
    "model" : "model",
    "service_tier" : "auto",
    "id" : "id",
    "choices" : [ {
      "finish_reason" : "stop",
      "index" : 0,
      "message" : {
        "role" : "assistant",
        "function_call" : {
          "name" : "name",
          "arguments" : "arguments"
        },
        "refusal" : "refusal",
        "annotations" : [ {
          "type" : "url_citation",
          "url_citation" : {
            "start_index" : 1,
            "end_index" : 6,
            "title" : "title",
            "url" : "url"
          }
        }, {
          "type" : "url_citation",
          "url_citation" : {
            "start_index" : 1,
            "end_index" : 6,
            "title" : "title",
            "url" : "url"
          }
        } ],
        "tool_calls" : [ {
          "function" : {
            "name" : "name",
            "arguments" : "arguments"
          },
          "id" : "id",
          "type" : "function"
        }, {
          "function" : {
            "name" : "name",
            "arguments" : "arguments"
          },
          "id" : "id",
          "type" : "function"
        } ],
        "audio" : {
          "expires_at" : 5,
          "transcript" : "transcript",
          "data" : "data",
          "id" : "id"
        },
        "content" : "content"
      },
      "logprobs" : {
        "refusal" : [ null, null ],
        "content" : [ {
          "top_logprobs" : [ {
            "logprob" : 7.061401241503109,
            "bytes" : [ 9, 9 ],
            "token" : "token"
          }, {
            "logprob" : 7.061401241503109,
            "bytes" : [ 9, 9 ],
            "token" : "token"
          } ],
          "logprob" : 5.637376656633329,
          "bytes" : [ 2, 2 ],
          "token" : "token"
        }, {
          "top_logprobs" : [ {
            "logprob" : 7.061401241503109,
            "bytes" : [ 9, 9 ],
            "token" : "token"
          }, {
            "logprob" : 7.061401241503109,
            "bytes" : [ 9, 9 ],
            "token" : "token"
          } ],
          "logprob" : 5.637376656633329,
          "bytes" : [ 2, 2 ],
          "token" : "token"
        } ]
      }
    }, {
      "finish_reason" : "stop",
      "index" : 0,
      "message" : {
        "role" : "assistant",
        "function_call" : {
          "name" : "name",
          "arguments" : "arguments"
        },
        "refusal" : "refusal",
        "annotations" : [ {
          "type" : "url_citation",
          "url_citation" : {
            "start_index" : 1,
            "end_index" : 6,
            "title" : "title",
            "url" : "url"
          }
        }, {
          "type" : "url_citation",
          "url_citation" : {
            "start_index" : 1,
            "end_index" : 6,
            "title" : "title",
            "url" : "url"
          }
        } ],
        "tool_calls" : [ {
          "function" : {
            "name" : "name",
            "arguments" : "arguments"
          },
          "id" : "id",
          "type" : "function"
        }, {
          "function" : {
            "name" : "name",
            "arguments" : "arguments"
          },
          "id" : "id",
          "type" : "function"
        } ],
        "audio" : {
          "expires_at" : 5,
          "transcript" : "transcript",
          "data" : "data",
          "id" : "id"
        },
        "content" : "content"
      },
      "logprobs" : {
        "refusal" : [ null, null ],
        "content" : [ {
          "top_logprobs" : [ {
            "logprob" : 7.061401241503109,
            "bytes" : [ 9, 9 ],
            "token" : "token"
          }, {
            "logprob" : 7.061401241503109,
            "bytes" : [ 9, 9 ],
            "token" : "token"
          } ],
          "logprob" : 5.637376656633329,
          "bytes" : [ 2, 2 ],
          "token" : "token"
        }, {
          "top_logprobs" : [ {
            "logprob" : 7.061401241503109,
            "bytes" : [ 9, 9 ],
            "token" : "token"
          }, {
            "logprob" : 7.061401241503109,
            "bytes" : [ 9, 9 ],
            "token" : "token"
          } ],
          "logprob" : 5.637376656633329,
          "bytes" : [ 2, 2 ],
          "token" : "token"
        } ]
      }
    } ],
    "system_fingerprint" : "system_fingerprint",
    "object" : "chat.completion"
  } ],
  "last_id" : "last_id",
  "has_more" : true,
  "object" : "list"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

